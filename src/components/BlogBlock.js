import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  image: {
    // position: 'absolute',
  },
  content: {
    // position: 'absolute',
  },
  box: {
    position: "relative",
    width: "300px",
    height: "400px",
    background: "#000",
    boxShadow: "0 30px 30px rgba(0,0,0,.5)",
    '& $image' :{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transition: "0.5s"
    },
    '&:hover $image': {
      opacity: 0
    },
    '& $content': {
      position: "absolute",
      bottom: "20px",
      left: "10%",
      width: "80%",
      height: "50px",
      background: "#fff",
      transition: "0.5s",
      overflow: "hidden",
      padding: "5px",
      boxSizing: "border-box"
    },
    '&:hover $content': {
      width: "100%",
      height: "100%",
      bottom: "0",
      left: "0"
    },
    '& $content h3': {
      margin: 0,
      padding: 0,
      fontSize: "15px"
    },
    '& $content p': {
      margin: '10px 0 0',
      padding: 0,
      opacity: 0,
      lineHeight: "1.2em",
      transition: "0.5s",
      textAlign: "justify"
    },
    '&:hover $content p': {
      opacity: 1,
      transitionDelay: "0.5s"
    }
  },
}));

const BlogBlock = (props) => {
  const blogs = props.blog.substring(0, 650)
  const route = `/blog/${props.id}`;
  const classes = useStyles();
  return (
      <div className={classes.box}>
        <div className={classes.imgBx}>
          <img className={classes.image} src={props.img} />
        </div>
          <div className={classes.content}>
              <h3>{props.title}</h3>
              <p>{blogs}......</p>
              <Link to={route} className={classes.link}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
          </div>
      </div>
  );
};
export default BlogBlock;