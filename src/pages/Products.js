import React, { useState, useEffect } from "react";
import ProductBlock from "../components/ProductBlock";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

const mockedData = [
  {
    img: "http://lorempixel.com/400/200/sports/",
    price: "15",
    id: "1",
  },
  {
    img: "http://lorempixel.com/400/200/sports/",
    price: "12.5",
    id: "2",
  },
  {
    img: "http://lorempixel.com/400/200/sports/",
    price: "12.5",
    id: "3",
  },
  {
    img: "http://lorempixel.com/400/200/sports/",
    price: "12.5",
    id: "4",
  },
  {
    img: "http://lorempixel.com/400/200/sports/",
    price: "12.5",
    id: "5",
  },
  {
    img: "http://lorempixel.com/400/200/sports/",
    price: "12.5",
    id: "6",
  },
  {
    img: "http://lorempixel.com/400/200/sports/",
    price: "12.5",
    id: "7",
  },
];

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
