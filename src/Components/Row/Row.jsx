import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardLayout from "../CardLayout";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    color: "white",
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
    textDecoration: "none",
  },
});

const Row = ({ heading, list, to }) => {
  const classes = useStyles();

  const RenderRowsResult = () =>
    list?.slice(0, 6).map((movie) => {
      return <CardLayout key={movie.id} movie={movie} />;
    });

  return (
    <div className={classes.root}>
      <div className={classes.headingContainer}>
        <Typography variant="h5" className={classes.heading}>
          {heading}
        </Typography>
        {list && (
          <Typography
            component={Link}
            to={to}
            variant="body2"
            className={classes.expand}
          >
            More
          </Typography>
        )}
      </div>
      <div className={classes.cardContainer}>
        {list && <RenderRowsResult />}
      </div>
    </div>
  );
};

export default Row;
