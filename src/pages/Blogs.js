import React, { useState, useEffect } from "react";
import BlockBlock from "../components/BlogBlock";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

const mockedData = [
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Lorem Ipsum",
    date: "September 14, 2016",
    img: "https://source.unsplash.com/random",
    id: "1",
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Lorem Ipsum",
    date: "September 14, 2016",
    img: "https://source.unsplash.com/random",
    id: "2",
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Lorem Ipsum",
    date: "September 14, 2016",
    img: "https://source.unsplash.com/random",
    id: "3",
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Lorem Ipsum",
    date: "September 14, 2016",
    img: "https://source.unsplash.com/random",
    id: "4",
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "Lorem Ipsum",
    date: "November 10, 2017",
    img: "https://source.unsplash.com/random",
    id: "5",
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "lorem Ipsum",
    date: "December 01, 2019",
    img: "https://source.unsplash.com/random",
    id: "6",
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: "lorem Ipsum",
    date: "October 18, 2015",
    img: "https://source.unsplash.com/random",
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

const Blogs = () => {
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
            <BlockBlock {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Blogs;
