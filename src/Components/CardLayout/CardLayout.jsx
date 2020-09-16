import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  card: {
    maxWidth: 245,
    minWidth: 160,
    width: "40vw",
    flex: "0 0 auto",
    height: "20vh",
  },
  media: {
    //height: "100px",
    height: "100%",
  },
});

const CardLayout = ({ imagePath, title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={imagePath} title={title} />
      </Card>
      <Typography variant="body2">{title}</Typography>
    </div>
  );
};

export default CardLayout;
