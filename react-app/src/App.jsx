import React from "react";
// import HomePage from "./pages/HomePage";
// import Button from "./components/button";
import HomePage from "./pages/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Approutes from "./routes/Approutes";
import Counter from "./components/counter";
import Users from "./components/Users";
import Players from "./components/players";
import HeightWidht from "./components/HeightWidht";
import Size from "./layout/Size";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Banner from "./components/Banner";

const App = () => {
  /* 
  const loginBtn = () => {
    console.log("login");
  };
  const LogoutBtn = () => {
    console.log("logout");
  };
  const song = "myButton"; / */

  return (
    // <div>
    //   {/* <Approutes /> */}
    //   {/* <HeightWidht /> */}

    //   {/* <Players /> */}
    //   {/* <Counter /> */}
    //   {/* <Users /> */}
    // </div>
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Size />
      <Navbar />
      {/* Page Content */}
      <main className="flex-grow container mx-auto my-1">
        <Banner />
        {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* </Routes> */}
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
