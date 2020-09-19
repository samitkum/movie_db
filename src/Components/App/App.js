import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Banner from "../Banner";
import RowContainer from "../RowContainer";
import RenderDetails from "../RenderDetails";
import MovieLists from "../MovieLists";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";
import theme from "../../CustomTheme/customTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
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
    <MuiThemeProvider theme={theme}>
      <div>
        <Router>
          <Header />
          <ScrollToTop />
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
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
