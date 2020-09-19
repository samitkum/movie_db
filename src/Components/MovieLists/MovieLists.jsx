import React, { useState, useEffect } from "react";
import CardLayout from "../CardLayout";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

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
  } = useSelector((state) => state);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/movies/popularMovies") {
      setMovies(popular_movies);
    } else if (pathname === "/movies/upcomingMovies") {
      setMovies(upcoming_movies);
    } else if (pathname === "/movies/popularTvSeries") {
      setMovies(popular_tv_series);
    } else if (pathname === "/movies/topRatedMovies") {
      setMovies(top_rated_movies);
    }
  }, []);

  return (
    <div className={classes.root}>
      {movies?.map((movie) => (
        <CardLayout key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieLists;
