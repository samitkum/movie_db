import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardLayout from "../CardLayout";

import { get_image_url } from "../../api";

const useStyles = makeStyles({
  root: {
    color: "white",
    marginBottom: "1.5em",
  },
  cardContainer: {
    display: "flex",
    overflowX: "scroll",
  },
  heading: {
    padding: "0.5em",
    fontSize: "1.4em",
  },
  headingContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  expand: {
    color: "tomato",
    padding: "0.5em",
    cursor: "pointer",
  },
});

const Row = ({ heading, list }) => {
  const classes = useStyles();

  const RenderRowsResult = () =>
    list?.map((movie) => {
      return (
        <CardLayout
          key={movie.id}
          imagePath={get_image_url(movie, "w300")}
          movie={movie}
        />
      );
    });

  return (
    <div className={classes.root}>
      <div className={classes.headingContainer}>
        <Typography variant="h5" className={classes.heading}>
          {heading}
        </Typography>
        <Typography variant="body2" className={classes.expand}>
          More
        </Typography>
      </div>
      <div className={classes.cardContainer}>
        {list && <RenderRowsResult />}
      </div>
    </div>
  );
};

export default Row;