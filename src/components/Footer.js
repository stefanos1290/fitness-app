import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: "100px",
    position: "static",
    bottom: 0,
    backgroundColor: "#3f51b5",
    boxShadow: "0px 5px 5px 5px black",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return <div className={classes.container}></div>;
};
export default Footer;
