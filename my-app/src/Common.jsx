import React from "react";
import { NavLink } from "react-router-dom";
// import img4 from "../src/images/img4.svg";
import { motion } from "framer-motion";
import './App.css'
const Common = (props) => {
  return (
    <>
    <h1 className="text-center main_para">Welcome To Optimal Techies</h1>
                <p className="text-center semiheading tracking-in-contract-bck sub_para">where imagination builts into a product</p>
      <section id="header" className="d-flex align-items-center mt-auto">
      
        <div className="container-fluid">
        
          <div className="row responsive">
            <div className="col-10 mx-auto">
              <div className="row row_res">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex flex-column justify-content-center res_header">
                
                  <h1 className="text-head">
                    {/* Grow Your Lifestyle With{" "} */}
                    {props.name}
                    <strong className="brand-name tracking-in-expand">Optimal Techies</strong>
                  </h1>
                  <h2 className="my-3">
                    we are the team of talented developer making an efficient
                    and affordable products for you
                  </h2>

                  <div className="mt-3">
                    <NavLink end to={props.visit} >
                      {/* Get Started */}
                      <motion.button
                        className="btn btn-light rounded-pill"
                        whileHover={{
                          scale:1.05
                        }}
                        

                      >
                      {props.btname}
                      </motion.button>
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img shadow-drop-center scale-in-center res_img">
                  <img
                    src={props.imgsrc}
                    alt="developer"
                    className="img-fluid "
                  />
                </div>
              </div>
            </div>
          </div>
        </div> 
      </section>
    </>
  );
};

export default Common;
