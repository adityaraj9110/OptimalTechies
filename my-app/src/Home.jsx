import React from "react";
import { NavLink } from "react-router-dom";
import img4 from "../src/images/img4.svg";
import Common from "./Common";
import './App.css'
import './Home.css'
const Home = () => {
  return (
    <>

      <Common name='Grow Your Lifestyle With ' imgsrc={img4} visit='/service' btname='Get Started'/>
    </>
  );
};

export default Home;
