import React, { useState, useEffect } from "react";
import BlogBlock from "../components/BlogBlock";
import { makeStyles } from "@material-ui/core/styles";
import { mockedData } from "../mocks/blogs.mock";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';



SwiperCore.use([Navigation, Pagination, A11y]);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  container: {
    position: 'absolute',
    width: "100%",
    height: "100%",
    background: "#607d8b",
  },
  containerSwiper: {
    marginTop: "100px",
  },
  swiperSlide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const Blogs = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setData(mockedData);
  }, []);

  return (
    <div className={classes.container}>
    <Swiper onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} wrapperTag='ul' loop className={classes.containerSwiper} slidesPerView={2} navigation pagination={{ clickable: true }} effect="Flip">
        {data.map((item) => (
              <SwiperSlide className={classes.swiperSlide} key={item.id}>
            <BlogBlock {...item} /> 
      </SwiperSlide>
          ))}
        </Swiper>
</div>
  );
};
export default Blogs;