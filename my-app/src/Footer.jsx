import React from 'react'
import './footer.css'
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
const footer = () => {

    const handleStyle=({isActive})=>{
        return {
            
                fontWeight: isActive ? '500' : "normal",
                color     : isActive ? "#000": '#fff'
            
        }
    }
  return (
    <>
      <section className="footer">
        <div className="box-container">

        <div className="box">
                <h3>about us</h3>
                <p>Optimal techies is a tech startup and provide many services as well like creating software or any kind of websites</p>
            </div>
            
            <div className="box">
                <h3>quick links</h3>
                <NavLink    style={handleStyle} className='nav-link' end to="/">home </NavLink>
                <NavLink    style={handleStyle} className='nav-link' end to= "/testimonial">Testimonial</NavLink>
                <NavLink   style={handleStyle} className='nav-link' end to='/service'>service</NavLink>
                <NavLink    style={handleStyle} className='nav-link' end to='/contact'>contact</NavLink>
            </div>

            <div className="box">
                <h3>follow us </h3>
                <a  className='nav-link' href="https://www.facebook.com/profile.php?id=100007581254284" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a  className='nav-link' href="https://www.instagram.com/optimaltechies/?hl=en" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a className='nav-link'  href="https://www.linkedin.com/in/aditya-raj-9b2165227/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a  className='nav-link' href="https://github.com/adityaraj9110" target="_blank"> <i className="fa-brands fa-github"></i></a>
            </div>
        </div>

        <h1 className="credit">developed by <span>Optimal Techies</span> All Rights Are Reserved! &copy; 2021</h1>
     
    </section>
    </>
  )
}

export default footer
