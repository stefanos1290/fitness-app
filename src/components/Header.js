import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    // flexGrow: 1,
    position: 'absolute',
    width: '100%',
    zIndex: 1000
  },
  logo: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Monospace",
    border: '1px solid white',
    borderRadius: '100%'
  },
  linkProducts: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Monospace",
    position: "absolute",
    right: '340px'
  },
  linksBlogs: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Monospace",
    position: "absolute",
    right: '210px'
  },
  linksGetHelp: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Monospace",
    position: "absolute",
    right: '50px'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Toolbar>
        <Link className={classes.logo} to="/">
          <Button color="inherit">SO</Button>
          </Link>
          <Link className={classes.linkProducts} to="/product">
            <Button color="inherit">Products</Button>
          </Link>
          <Link className={classes.linksBlogs} to="/blogs">
            <Button color="inherit">Blogs</Button>
          </Link>
          <Link className={classes.linksGetHelp} to="/contact">
            <Button color="inherit">Get Help?</Button>
          </Link>
          </Toolbar>
    </div>
  );
};
export default Header;
