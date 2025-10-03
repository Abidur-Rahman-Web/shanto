import React from "react";
import Navbar from "./Size";
import Footer from "../components/Footer";

const SiteLayout = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
