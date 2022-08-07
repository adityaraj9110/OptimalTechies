import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import close from '../src/images/close.svg'
import menu from '../src/images/menu.svg'
import './Navbar.css'
const Navbar = () => {
  const [open,setOpen]=useState(false)
  const lists = ["Home","Testimonial",, "Service", "Contact"];
  const handleStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "500" : "normal",
      color: isActive ? "#3498db" : "#000",
    };
  };


  
  return (
    
    <>
       <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                
                {lists.map((list,id)=>{
                  return <motion.li 
                  key={id}
                  initial={{opacity:0,translateX:-50}}
                  animate={{opacity:1,translateX:0}}
                  transition={{duration:0.3,delay:id*0.3}}
                  
                  
                  
                  ><NavLink style={handleStyle} end to={list==='Home'?`/`:`/${list}`} >{list}</NavLink></motion.li>
                })}

            </ul>
            <h1 className="logo bounce-top">OT</h1>
        </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navbar;
