import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          background: "radial-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)",
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
