import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Banner from "../Banner";
import RowContainer from "../RowContainer";
import RenderDetails from "../RenderDetails";
import {
  fetch_popular_movies,
  fetch_top_rated_movies,
  fetch_popular_tv_series,
  fetch_upcoming_movies,
} from "../../Redux/Action";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_popular_movies());
    dispatch(fetch_top_rated_movies());
    dispatch(fetch_popular_tv_series());
    dispatch(fetch_upcoming_movies());
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Banner />
            <RowContainer />
          </Route>
          <Route path="/movie/:movieId" component={RenderDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
