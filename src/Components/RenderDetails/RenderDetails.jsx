import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";
import { useRouteMatch } from "react-router-dom";
import { get_image_url } from "../../api";
import { get_movie, get_recommended_movies } from "../../api";
import Typography from "@material-ui/core/Typography";
import Row from "../Row";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexWrap: "wrap",
  },
  cardImage: {
    width: "60vw",
    minWidth: "600px",
    height: "50vh",
    flex: 1,
  },
  genresContainer: {
    display: "flex",
    gap: "1em",
    flexWrap: "wrap",
  },
  selectedMovieContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5em",
  },
  NoRecommendation: {
    color: "white",
  },
});

const RenderDetails = () => {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const {
    params: { movieId },
  } = useRouteMatch();

  useEffect(() => {
    const fetch_movie = async () => {
      await get_movie(movieId).then((res) => {
        setMovie(res);
      });
    };
    fetch_movie();
  }, [movieId]);
  useEffect(() => {
    const fetch_movies = async () => {
      await get_recommended_movies(movieId).then((res) => {
        setMovies(res.results);
      });
    };
    fetch_movies();
  }, [movieId]);
  const classes = useStyles();
  return (
    <div className={classes.selectedMovieContainer}>
      <Card className={classes.card}>
        {movie && (
          <>
            <CardMedia
              className={classes.cardImage}
              title={movie?.title || movie?.name || movie?.original_title}
              image={get_image_url(movie, "w500")}
            />
            <CardContent>
              <Typography variant="h5" color="primary">
                {movie?.title || movie?.name || movie?.original_title}(
                {new Date(movie.release_date).getFullYear()})
              </Typography>
              <CircularProgress
                variant="static"
                value={movie.vote_average * 10}
              />
              <div className={classes.genresContainer}>
                {movie.genres.map(({ id, name }) => (
                  <Chip key={id} size="medium" label={name} />
                ))}
              </div>
              <Typography variant="h3" color="primary">
                Overview
              </Typography>
              <Typography variant="body2" color="primary">
                {movie.overview}
              </Typography>
            </CardContent>
          </>
        )}
      </Card>
      <Card>
        <CardContent style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
          {movies.length > 0 ? (
            <Row heading="Recommendations" list={movies} />
          ) : (
            <Typography variant="h5" className={classes.NoRecommendation}>
              No Recommendations available
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RenderDetails;
