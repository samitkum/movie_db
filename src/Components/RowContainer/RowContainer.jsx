import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Row from "../Row";

import {
  get_popular_movies,
  get_top_rated_movies,
  get_upcoming_movies,
  get_popular_tv_list,
} from "../../api";

const useStyles = makeStyles({
  root: {
    padding: "1em",
    paddingRight: "0em",
  },
});

const RowContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Row heading="Upcoming Movies" fetchUrl={get_upcoming_movies} />
      <Row heading="Popular TV Series" fetchUrl={get_popular_tv_list} />
      <Row heading="Latest Movies" fetchUrl={get_top_rated_movies} />
      <Row heading="Popular Movies" fetchUrl={get_popular_movies} />
    </div>
  );
};

export default RowContainer;
