import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import SearchBar from "../SearchBar";
import Hidden from "@material-ui/core/Hidden";

import IconButton from "@material-ui/core/IconButton";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  headerLogo: {
    textDecoration: "none",
    color: "tomato",
    fontWeight: 600,
  },
  form: {
    display: "flex",
    width: "40vw",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <HideOnScroll {...props}>
      <AppBar position="sticky">
        <Toolbar className={classes.header}>
          {pathname !== "/" && (
            <Hidden mdUp>
              <IconButton
                className={classes.iconButton}
                aria-label="back"
                onClick={goBack}
              >
                <ArrowBackIosIcon />
              </IconButton>
            </Hidden>
          )}
          <Typography
            variant="h4"
            color="initial"
            component={Link}
            to="/"
            className={classes.headerLogo}
          >
            MovieDB
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};
export default Header;
