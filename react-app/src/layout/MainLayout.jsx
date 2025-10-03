import React from "react";
import Navbar from "./Size";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
