import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    paddingRight: "1em",
  },
  card: {
    maxWidth: 245,
    minWidth: 160,
    width: "40vw",
    flex: "0 0 auto",
    height: "20vh",
  },
  media: {
    height: "100%",
  },
});

const CardLayout = ({ imagePath, movie }) => {
  const classes = useStyles();
  const title = movie?.title || movie?.name || movie?.original_title;
  const { pathname } = useLocation();
  return (
    <div className={classes.root}>
      <Card
        className={classes.card}
        component={Link}
        to={pathname === "/" ? `movie/${movie.id}` : `${movie.id}`}
      >
        <CardMedia
          className={classes.media}
          image={imagePath}
          title={title}
          loading="lazy"
        />
      </Card>
      <Typography variant="body2">{title}</Typography>
    </div>
  );
};

export default CardLayout;
