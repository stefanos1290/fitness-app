import React, { useState, useEffect } from "react";
import ProductBlock from "../components/ProductBlock";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import { mockedData } from "../mocks/products.mock";

import Fade from 'react-reveal/Fade';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(#607d8b, #bf9c87)"
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }

}));

const Products = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setData(mockedData);
  }, []);
  return (
    <>
      <Grid className={classes.root} container>
        {data.map((item) => (
          <Grid xs={12} key={item.id} className={classes.paper} item>
            <Fade left>
            <ProductBlock {...item}  />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Products;
