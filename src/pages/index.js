import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import Advisors from "../components/Advisors";
import Contact from "../components/Contact/Contact";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Advisors {...homeObjThree}/>
      <Contact/>
      <Footer />
    </>
  );
};

export default Home;
