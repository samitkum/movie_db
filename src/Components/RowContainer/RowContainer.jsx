import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Row from "../Row";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    padding: "1em",
    paddingRight: "0em",
  },
});

const RowContainer = () => {
  const classes = useStyles();
  const {
    popular_movies,
    upcoming_movies,
    top_rated_movies,
    popular_tv_series,
  } = useSelector((state) => state);

  return (
    <div className={classes.root}>
      <Row heading="Upcoming Movies" list={upcoming_movies} />
      <Row heading="Popular TV Series" list={popular_tv_series} />
      <Row heading="Latest Movies" list={top_rated_movies} />
      <Row heading="Popular Movies" list={popular_movies} />
    </div>
  );
};

export default RowContainer;
