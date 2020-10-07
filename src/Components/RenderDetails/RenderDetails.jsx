import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useRouteMatch } from "react-router-dom";
import { get_image_url } from "../../api";
import {
  get_movie,
  get_recommended_movies,
  get_video_key_of_youtube,
} from "../../api";
import Typography from "@material-ui/core/Typography";
import Row from "../Row";
import ReactPlayer from "react-player/lazy";
import Skeleton from "../SkeletonPlaceHolder";
const useStyles = makeStyles({
  card: {
    display: "flex",
    flexWrap: "wrap",
    borderRadius: 0,
  },
  cardImage: {
    width: "60vw",
    minWidth: "600px",
    height: "50vh",
    flex: 1,
  },
  genresContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  genres: {
    //backgroundColor: theme.palette.primary.main,
    //color: "white",
    marginRight: "0.5em",
  },
  selectedMovieContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5em",
  },
  NoRecommendation: {
    //color: "white",
  },
  movieDetailsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  },
  rating: {
    fontWeight: 800,
  },
  recommendationContent: {
    paddingRight: 0,
    paddingLeft: 0,
    //backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  recommendationContainer: {
    borderRadius: 0,
  },
});
const YOUTUBE_URL = "https://www.youtube.com/watch?v=";
const RenderDetails = () => {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    params: { movieId },
  } = useRouteMatch();

  useEffect(() => {
    const fetch_movie = async () => {
      setLoading(true);
      await get_movie(movieId).then((res) => {
        setMovie(res);
        setLoading(false);
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
  useEffect(() => {
    const fetch_movies = async () => {
      await get_video_key_of_youtube(movieId).then((res) => {
        setVideo(res.results);
      });
    };
    fetch_movies();
  }, [movieId]);
  const classes = useStyles();
  if (loading) {
    return <Skeleton />;
  }
  return (
    <div className={classes.selectedMovieContainer}>
      {movie && (
        <>
          <Card className={classes.card}>
            {video.length === 0 ? (
              <CardMedia
                className={classes.cardImage}
                component={ReactPlayer}
                title={movie?.title || movie?.name || movie?.original_title}
                image={get_image_url(movie, "w500")}
              />
            ) : (
              <ReactPlayer
                height="50vh"
                width="100%"
                controls
                url={`${YOUTUBE_URL}${video[0].key}`}
              />
            )}
            <CardContent className={classes.movieDetailsContainer}>
              <Typography variant="h5">
                {movie?.title || movie?.name || movie?.original_title}(
                {new Date(movie.release_date).getFullYear()})
              </Typography>
              {movie.vote_average * 10 > 0 && (
                <Box position="relative">
                  <CircularProgress
                    variant="static"
                    value={movie.vote_average * 10}
                    size={50}
                  />
                  <Box
                    top={15}
                    left={11}
                    bottom={0}
                    right={0}
                    position="absolute"
                  >
                    <Typography
                      variant="body2"
                      component="div"
                      //color="textSecondary"
                      className={classes.rating}
                    >{`${movie.vote_average * 10}%`}</Typography>
                  </Box>
                </Box>
              )}
              <div className={classes.genresContainer}>
                {movie.genres.map(({ id, name }) => (
                  <Chip
                    key={id}
                    size="medium"
                    label={name}
                    className={classes.genres}
                  />
                ))}
              </div>
              <div>
                <Typography variant="h4">Overview</Typography>
                <Typography variant="body2">{movie.overview}</Typography>
              </div>
            </CardContent>
          </Card>
          <Card className={classes.recommendationContainer}>
            <CardContent className={classes.recommendationContent}>
              {movies.length > 0 ? (
                <Row heading="Recommendations" list={movies} to={"/"} />
              ) : (
                <Typography variant="h5" className={classes.NoRecommendation}>
                  No Recommendations available
                </Typography>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default RenderDetails;
