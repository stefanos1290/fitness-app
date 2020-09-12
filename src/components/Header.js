import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    textDecoration: "none",
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            LOGO
          </Typography>
          <Link className={classes.links} to="/">
            <Button color="inherit">Products</Button>
          </Link>
          <Link className={classes.links} to="/blogs">
            <Button color="inherit">Blogs</Button>
          </Link>
          <Link className={classes.links} to="/contact">
            <Button color="inherit">Get Help?</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
