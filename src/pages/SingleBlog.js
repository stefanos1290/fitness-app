import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockedData } from "../mocks/blogs.mock";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(#607d8b, #bf9c87)",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  blogCard: {
    position: "absolute", 
    width: "80%",
    height: "70%",
    background: "white",
    zIndex: 1,
    boxShadow: '0 2px 10px rgba(0,0,0,.2)',
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    overflow: "scroll",
    padding: "30px"
  },
  title: {
    color: "#474747",
    fontWeight: '600',
    fontSize: '28px',
  },
  author: {
    color: "#607d8b",
    fontWeight: '600',
    fontSize: '23px',
    marginTop: 15
  },
  date: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: '18px',
  },
  blog: {
    color: "#474747",
    fontSize: '18px',
    marginTop: 15
  }
}));

const SingleBlog = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
      <div className={classes.blogCard}>
        <div className={classes.title}>{data.title}</div>
        <span className={classes.author}>{data.author}</span>
        <span className={classes.date}>{data.date}</span>
        <div className={classes.blog}>{data.blog}</div>
      </div>
    </div>
  );
};
export default SingleBlog;

{/* <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={data.img}
          title="Paella dish"
          style={{position: "aboslute", top: "0", left: '0'}}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing style={{position: "aboslute", top: "0", left: '0'}}>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{data.blog}</Typography>
          </CardContent>
        </Collapse>
      </Card> */}