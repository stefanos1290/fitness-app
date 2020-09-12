import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: "none",
  },
  price: {
    alignSelf: "flex-end",
  },
});

const ProductBlock = (props) => {
  const route = `/product/${props.id}`;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.img}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.product}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={route} className={classes.link}>
          <Button size="small" color="primary">
            BUY
          </Button>
        </Link>
        <Typography className={classes.price} color="primary">
          ‎€{props.price}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ProductBlock;
