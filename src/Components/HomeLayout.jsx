// layouts/HomeLayout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


const HomeLayout = () => {
  return (
    <>
      <Navbar />    {/* Home-specific header */}
      <Outlet />    {/* Home page content will render here */}
      <Footer />
    </>
  );
};

export default HomeLayout;
