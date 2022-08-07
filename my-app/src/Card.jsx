import React from "react";
import { motion } from "framer-motion";
const Card = (props) => {
  return (
    <>
      <motion.div className=" scale-in-center col-md-4 col-10 mx-auto card_div ">
        <div class="card h-100 card-div">
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <img className="card-img-top card_img w-50 align-self-center" src={props.src}></img>
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title text-center">{props.title}</h5>

            <motion.a href="#" class="btn btn-primary ">
              <motion.span
                initial={{
                  x: -5,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                  },
                }}
              >
                Check
              </motion.span>{" "}
              <motion.span
                initial={{
                  x: -5,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                  },
                }}
              >
                Our
              </motion.span>
              <motion.span
                initial={{
                  x: -5,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 1,
                  },
                }}
              >
                {" "}
                Work
              </motion.span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
