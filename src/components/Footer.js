import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    height: "215px",
    position: "relative",
    bottom: 0,
    backgroundColor: "#009688",
    boxShadow: "0px 5px 5px 5px black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  copyrightName: {
    color: "white",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.copyrightName}>
        © Stefanos Oxinos 2020
      </Typography>
    </div>
  );
};
export default Footer;
