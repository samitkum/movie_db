import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";

import { get_image_url, get_upcoming_movies } from "../../api";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "contain",
  },
  imageContainer: {
    position: "relative",
  },
  movieInfo: {
    color: "white",
    width: "100%",
    padding: "1em",
    position: "absolute",
    bottom: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "left",
  },
  movieTitle: {
    fontSize: "2em",
  },
  movieOverview: {
    fontSize: "1em",
  },
});

const Banner = () => {
  const [movies, setMovies] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const fetch_movie = async () => {
      await get_upcoming_movies().then((res) => {
        setMovies(res.results);
      });
      return;
    };
    fetch_movie();
  }, []);

  return (
    <>
      <Carousel
        autoPlay
        showThumbs={false}
        infiniteLoop
        className={classes.bannerContainer}
      >
        {movies &&
          movies.slice(0, 7).map((movie, idx) => {
            return (
              <div
                key={movie.id}
                style={{
                  backgroundImage: `linear-gradient(to bottom, transparent, rgba(0,0,0, 0.73)),
                  url("${get_image_url(movie, "w500")}")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "50vh",
                  width: "100%",
                }}
              >
                <div key={movie.title} className={classes.movieInfo}>
                  <h1 className={classes.movieTitle}>{movie.title}</h1>
                  <p className={classes.movieOverview}>{movie.overview}</p>
                </div>
              </div>
            );
          })}
      </Carousel>
    </>
  );
};

export default Banner;
