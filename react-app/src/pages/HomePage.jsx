import React from "react";
import MainLayout from "../layout/MainLayout";
import "../assets/styles/index.css";
import UserForm from "../components/UserForm";
import SiteLayout from "../layout/SiteLayout";
import HeroSection from "../components/HeroSection";
import Contact from "../components/Contact";
import SiteNavbar from "../components/SiteNavbar";

const HomePage = () => {
  // const myClass = "title";
  return (
    <SiteLayout>
      <SiteNavbar />
      <HeroSection />
      <Contact />
    </SiteLayout>
  );
};

export default HomePage;
