import React, { useState, useEffect } from "react";
import ProductBlock from "../components/ProductBlock";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import { mockedData } from "../mocks/products.mock";

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
          <Grid xs={4} key={item.id} className={classes.paper} item>
            <ProductBlock {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Products;
