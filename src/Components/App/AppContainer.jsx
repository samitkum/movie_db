import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import ScrollToTop from "../ScrollToTop";

import { useSelector } from "react-redux";
import Paper from "@material-ui/core/Paper";

import {
  fetch_popular_movies,
  fetch_top_rated_movies,
  fetch_popular_tv_series,
  fetch_upcoming_movies,
} from "../../Redux/Action";
import Skeleton from "../SkeletonPlaceHolder";
import Header from "../Header";

const Banner = lazy(() => import("../Banner"));
const RowContainer = lazy(() => import("../RowContainer"));
const RenderDetails = lazy(() => import("../RenderDetails"));
const MovieLists = lazy(() => import("../MovieLists"));
const SearchBar = lazy(() => import("../SearchBar"));
const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_popular_movies());
    dispatch(fetch_top_rated_movies());
    dispatch(fetch_popular_tv_series());
    dispatch(fetch_upcoming_movies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const setSearching = useSelector((state) => state.setSearching);

  return (
    <Paper>
      <Router>
        <Header />
        <Suspense fallback={<Skeleton />}>
          <ScrollToTop />

          {setSearching === "searching" ? (
            <SearchBar />
          ) : (
            <Switch>
              <Route exact path="/">
                <Banner />
                <RowContainer />
              </Route>
              <Route path="/movie/:movieId" component={RenderDetails} />
              <Route
                path={["/movies/:movieType", "/search/:query"]}
                component={MovieLists}
              />
            </Switch>
          )}
        </Suspense>
      </Router>
    </Paper>
  );
};

export default React.memo(AppContainer);
