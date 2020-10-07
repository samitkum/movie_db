import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Search from "./Search";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { Link, useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { set_Searching, toggle_theme } from "../../Redux/Action";

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
  searchIcon: {
    fontSize: 32,
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
  const dispatch = useDispatch();
  const setSearching = useSelector((state) => state.setSearching);
  const type = useSelector((state) => state.type);
  const goBack = () => {
    history.goBack();
  };
  let theme = type === "light" ? "dark" : "light";
  const changeTheme = () => {
    dispatch(toggle_theme(theme));
  };
  return (
    <HideOnScroll {...props}>
      <AppBar position="sticky">
        <Toolbar className={classes.header}>
          {setSearching === "default" ? (
            <>
              {pathname !== "/" && (
                <IconButton
                  className={classes.iconButton}
                  aria-label="back"
                  onClick={goBack}
                >
                  <ArrowBackIosIcon />
                </IconButton>
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
              <div>
                <IconButton
                  onClick={() => dispatch(set_Searching("searching"))}
                >
                  <SearchIcon className={classes.searchIcon} />
                </IconButton>
                <IconButton onClick={changeTheme}>
                  <Brightness4Icon />
                </IconButton>
              </div>
            </>
          ) : (
            <Search />
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};
export default React.memo(Header);
