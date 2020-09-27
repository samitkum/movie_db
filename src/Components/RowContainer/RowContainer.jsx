import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Row from "../Row";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const RowContainerVariant = {
  hidden: {
    x: 1000,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};
const useStyles = makeStyles({
  root: {
    padding: "0.7em",
    paddingRight: 0,
    paddingLeft: 0,
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
    <motion.div
      variants={RowContainerVariant}
      initial="hidden"
      animate="visible"
      className={classes.root}
    >
      <Row
        heading="Upcoming Movies"
        list={upcoming_movies}
        to="/movies/upcomingMovies"
      />
      <Row
        heading="Popular TV Series"
        list={popular_tv_series}
        to="/movies/popularTvSeries"
      />
      <Row
        heading="Top Rated Movies"
        list={top_rated_movies}
        to="/movies/topRatedMovies"
      />
      <Row
        heading="Popular Movies"
        list={popular_movies}
        to="/movies/popularMovies"
      />
    </motion.div>
  );
};

export default memo(RowContainer);
