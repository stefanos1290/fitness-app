import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    // height: "100px",
    // bottom: 0,
  },
}));

const Fotter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  );
};
export default Fotter;
