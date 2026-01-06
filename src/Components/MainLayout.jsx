import React from "react";
import Header1 from "./Header1";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
    
      <Header1 />   
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
