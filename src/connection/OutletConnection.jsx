import React from "react";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";
function OutletConnection() {
  return (
    <div>
      <a href="#" className="scrollToTop">
        <i className="fas fa-angle-up" />
      </a>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default OutletConnection;
