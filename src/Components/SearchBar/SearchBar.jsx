import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { search_list } from "../../api";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
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
}));
const SearchBar = () => {
  const classes = useStyles();
  const inputText = useRef();
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState(null);
  //   useEffect(() => {
  //     const source = axios.CancelToken.source();

  //     if (inputText.current.value) {
  //       search_list(inputText?.current?.value, 1, source)
  //         .then((res) => setMovies(res.results))
  //         .catch((err) => {
  //           if (axios.isCancel(err)) return;
  //         });
  //     }
  //     return () => source.cancel("token cancel");
  //   }, [searchText]);
  //   const handleChange = () => {
  //     setSearchText(inputText.current.value);
  //   };
  //   if (movies?.length > 0) {
  //     console.log(movies);
  //   }
  return (
    <Paper component="form" className={classes.form} color="primary">
      <InputBase
        className={classes.input}
        inputRef={inputText}
        //onChange={handleChange}
        placeholder="Search..."
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
