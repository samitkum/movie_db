import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#454545",
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        color: "white",
      },
    },
    MuiFormLabel: {
      root: {
        color: "white",
      },
    },
  },
});

export default theme;
