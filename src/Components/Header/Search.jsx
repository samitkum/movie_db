import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { set_Searching, filter_lists } from "../../Redux/Action";
import { search_list } from "../../api";

const useStyles = makeStyles({
  root: {
    color: "red",
  },
});
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    const source = axios.CancelToken.source();
    if (searchText) {
      search_list(searchText, 1, source)
        .then((res) => {
          dispatch(filter_lists(res.results));
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
        });
    } else {
      dispatch(filter_lists(null));
    }
    return () => source.cancel();
  }, [searchText]);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <IconButton onClick={() => dispatch(set_Searching("default"))}>
        <ArrowBackIosIcon />
      </IconButton>
      <TextField
        autoFocus
        id="search"
        label="Search"
        variant="standard"
        value={searchText}
        fullWidth
        onChange={handleChange}
        className={classes.root}
      />
    </>
  );
};

export default Search;
