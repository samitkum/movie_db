import React, { useState, useEffect, memo } from "react";
import CardLayout from "../CardLayout";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "1em",
  },
});
const MovieLists = () => {
  const [movies, setMovies] = useState(null);
  const classes = useStyles();
  const {
    popular_movies,
    upcoming_movies,
    top_rated_movies,
    popular_tv_series,
    filterLists,
    setSearching,
  } = useSelector((state) => state);
  const { pathname } = useLocation();
  const list = {
    visible: { x: 0 },
    hidden: { x: 1000 },
  };
  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    if (pathname === "/movies/popularMovies") {
      setMovies(popular_movies);
      return;
    } else if (pathname === "/movies/upcomingMovies") {
      setMovies(upcoming_movies);
      return;
    } else if (pathname === "/movies/popularTvSeries") {
      setMovies(popular_tv_series);
      return;
    } else if (pathname === "/movies/topRatedMovies") {
      setMovies(top_rated_movies);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (setSearching === "searching") {
    if (!filterLists) {
      return (
        <div
          style={{
            display: "grid",
            placeItems: "center",
            height: "90vh",
            color: "white",
            padding: "1em",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Search Movies and TV Shows</h1>
        </div>
      );
    }
    if (filterLists) {
      return (
        <div className={classes.root}>
          {filterLists?.map((movie) => (
            <CardLayout key={movie.id} movie={movie} />
          ))}
        </div>
      );
    }
  } else {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className={classes.root}
      >
        <AnimatePresence>
          {movies?.map((movie) => (
            <motion.div
              key={movie.id}
              variants={item}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <CardLayout movie={movie} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    );
  }
};

export default memo(MovieLists);
