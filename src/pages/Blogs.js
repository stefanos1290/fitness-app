import React, { useState, useEffect } from "react";
import BlockBlock from "../components/BlogBlock";
import { makeStyles } from "@material-ui/core/styles";
import { mockedData } from "../mocks/blogs.mock";

import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Blogs = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setData(mockedData);
  }, []);

  return (
    <>
      <Grid className={classes.root} container>
        {data.map((item) => (
          <Grid xs={4} key={item.id} className={classes.paper} item>
            <BlockBlock {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Blogs;
