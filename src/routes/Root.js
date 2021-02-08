import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "../pages/Products";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Welcome from "../pages/Welcome";
import SingleProduct from "../pages/SingleProduct";
import SingleBlog from "../pages/SingleBlog";
import Layout from "../layout/Layout";

const Root = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
          <Route path="/" exact component={Welcome} />
            <Route path="/product" exact component={Products} />
            <Route path="/product/:id" component={SingleProduct} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/blog/:id" component={SingleBlog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default Root;
