import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { get_image_url } from "../../api";
import { useDispatch } from "react-redux";
import { set_Searching } from "../../Redux/Action";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
    paddingBottom: "1em",
    maxWidth: 245,
    minWidth: 160,
    width: "40vw",
  },
  card: {
    cursor: "pointer",
    width: "100%",
    flex: "0 0 auto",
    height: "20vh",
    opacity: "0.8",
    transition: "250ms",
    "&:hover": {
      opacity: "1",
    },
  },
  media: {
    height: "100%",
  },
});

const CardLayout = ({ movie }) => {
  const classes = useStyles();
  const title = movie?.title || movie?.name || movie?.original_title;
  const history = useHistory();
  const dispatch = useDispatch();
  const handleMovieDetails = () => {
    dispatch(set_Searching("default"));
    history.push(`/movie/${movie.id}`);
  };
  return (
    <div className={classes.root}>
      <Card className={classes.card} onClick={handleMovieDetails}>
        <CardMedia
          className={classes.media}
          image={get_image_url(movie, "w300")}
          title={title}
          loading="lazy"
        />
      </Card>
      <Typography variant="body2">{title}</Typography>
    </div>
  );
};

export default CardLayout;
