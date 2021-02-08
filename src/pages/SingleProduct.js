import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockedData } from "../mocks/products.mock";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: '#607d8b',
    position: "absolute"
  },
  cardContainer: {
    width: '700px',
    height: "400px",
    display: "flex",
    position: "relative",
    zIndex: 1,
    boxShadow: '0 2px 10px rgba(0,0,0,.2)',
  },
  img:  {
    position: "absolute",
    width: "60%",
    height: "100%",
    top: 0,
    left: 0,
    borderRadius: "10px 0 0 10px",
  },
  productInfo: {
    background: "white",
    position: "absolute",
    width: "40%",
    height: "100%",
    top: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    borderRadius: "0 10px 10px 0",
  },
  producName: {
    color: "#777",
    fontWeight: '600',
    fontSize: '20px',
  },
  description: {
    marginRight: "20px",
    color: "rgba(0, 0, 0, 0.54)"
  },
  buyButton: {
    fontWeight: "500",
    fontSize: '16px',
    color: '#f38695',
    width: "100px"
  }
});


const SingleProduct = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    if (typeof id !== "undefined") {
      const index = mockedData.findIndex((x) => x.id === id);
      setData(mockedData[index]);
      setLoading(false);
    }
  }, [id]);
  if (loading) {
    return <>Loading</>;
  }
  return (
    <div className={classes.container}>
      <Fade right>
      <div className={classes.cardContainer}>
            <img className={classes.img}  src={data.img} />
          <div className={classes.productInfo}>
            <div className={classes.producName}>{data.product}</div>
            <div className={classes.description}>{data.description}</div>
            <Button className={classes.buyButton} size="small" color="primary">
              BUY ‎{data.price}
            </Button>
          </div>
      </div>
      </Fade>
    </div>
  );
};
export default SingleProduct;

{/* <Card className={classes.root}>
<CardMedia
  className={classes.media}
  image={data.img}
  title="Contemplative Reptile"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="h2">
    {data.product}
  </Typography>
  <Typography variant="body2" color="textSecondary" component="p">
    {data.description}
  </Typography>
</CardContent>
<CardActions>
  <Button size="small" color="primary">
    BUY ‎{data.price}
  </Button>
</CardActions>
</Card> */}