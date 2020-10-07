import React from "react";
import AppContainer from "./AppContainer";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "../../CustomTheme/customTheme";
import { useSelector, shallowEqual } from "react-redux";
const App = () => {
  let type = useSelector((state) => state.type, shallowEqual);
  const light = createMuiTheme(lightTheme);
  const dark = createMuiTheme(darkTheme);

  return (
    <MuiThemeProvider theme={type === "light" ? light : dark}>
      <AppContainer />
    </MuiThemeProvider>
  );
};

export default App;
