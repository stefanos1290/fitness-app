import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockedData } from "../mocks/products.mock";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
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
    <Card className={classes.root}>
      <CardActionArea>
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
export default SingleProduct;
