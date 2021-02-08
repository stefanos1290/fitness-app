import React from "react";
import ReactDOM from "react-dom";
import Root from "./routes/Root";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import brown from "@material-ui/core/colors/brown";
import Cursor from './components/Cursor'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: brown,
  },
});

function App() {
  return (
    <>
    <Cursor/>
  <Root />
    </>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
