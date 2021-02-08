import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: '50px'

  },
  box: {
    width: '50%',
    display: "grid",
    gridTemplateColumns: "repeat(auto-fix, minmax(350px, 1fr))",
    gridGap: '15px',
    margin: "0 auto",
  },
  imgBx: {
    // position: 'absolute',
  },
  details: {
  // position: 'absolute',
  },
  card: {
    position: "relative",
    width: "300px",
    height: "350px",
    background: "#fff",
    margin: "0 auto",
    borderRadius: "4px",
    boxShadow: '0 2px 10px rgba(0,0,0,.2)',
    '& $imgBx': {
      position: 'absolute',
    top: '10px',
    left: '10px',
    bottom: '10px',
    right: '10px',
    background: "#222",
    transition: '0.5s',
    zIndex: 1
    },
    '& $details': {
      position: "absolute",
      left: '10px',
      right: "10px",
      bottom: "10px",
      height: '60px',
      textAlign: "center"
    },
    '& $details h2': {
      margin: 0,
      padding: 0,
      fontWeight: '600',
      fontSize: '20px',
      color: "#777",
      textTransform: 'uppercase'
    },
    '& $details h2 span': {
      fontWeight: "500",
      fontSize: '16px',
      color: '#f38695',
      display: "block",
      marginTop: '-5px'
    },
    '& $imgBx img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    '&:hover $imgBx': {
      bottom: "80px"
    },
    '&::before, &::after': {
      content: '""',
      position: "absolute",
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      borderRadius: "4px",
      background: '#fff',
      transition: '0.5s',
      zIndex: '-1',
    },
      "&:hover:before": {
        transform: "rotate(20deg)",
        boxShadow: '0 2px 20px rgba(0,0,0,.2)'
      },
    "&:hover:after": {
      transform: "rotate(10deg)",
      boxShadow: '0 2px 20px rgba(0,0,0,.2)'
    }
  },
  buy: {
    fontWeight: "500",
      fontSize: '13px',
      color: '#f38695',
      display: "block",
      marginTop: '-10px',
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
  line: {
    borderLeft: '1px solid #fff',
    height: '150px',
  },
  description: {
    width: "40%",
    fontSize: '20px'
  },
});

const ProductBlock = (props) => {
  const route = `/product/${props.id}`;
  const classes = useStyles();

  return (
    <div className={classes.container}>
    <div className={classes.box}>
      <div className={classes.card}>
        <div className={classes.imgBx}>
          <img src={props.img} />
        </div>
        <div className={classes.details}>
  <h2>{props.product}</h2><br /><Link to={route}><span link={route} className={classes.buy}>BUY {props.price}</span></Link>
        </div>
      </div>
    </div>
      <div className={classes.line}></div>
  <span className={classes.description}>{props.description}</span>
    </div>
  );
};

export default ProductBlock;
