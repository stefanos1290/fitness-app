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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  container: {
    width: "100vw",
    height: "81vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
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
      <Card className={classes.root}>
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
            BUY ‎€{data.price}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default SingleProduct;
