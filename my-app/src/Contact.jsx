// import React from "react";
// import mailus from "../src/images/mailus.svg"
// import {SiGmail} from "react-icons/si";
// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <>
//       <div className="parent_container">
//         <h1 className="text-center tracking-in-contract-bck con_title">
//           Contact Us
//         </h1>

//         <div className='child_container'>
//           <div class="card text-black  mb-3 child_card ">

//               <div class="card-header my_header_card"> <a  className="mail" href="mailto:adityaabraham039@gmail.com"><SiGmail className="mb-1" ><a href=""></a></SiGmail>
//                <motion.span
//               className="margin_mail"

//               >
//                 Tap to mail</motion.span>
//               </a></div>

//             <div class="card-body">
//               <h5 class="card-title">Success card title</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             </div>
//           </div>

//           <div className="img_div"><img src={mailus} alt="email" className="img-fluid " /></div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Contact;
import React, { useState } from "react";

import mobile from "./images/mobile.png";
import email2 from "./images/email2.png";
// import { AppWrap, MotionWrap } from '../../wrapper';
import { motion } from "framer-motion";
import { client } from "./client";

import "./contact.scss";

const Footer = () => {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [data,setData]=useState(false);
  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    
    
    setFormData({ ...formData, [name]: value });
    
    
    
  };
  // console.log(formData)
 
  const handleSubmit = (e) => {

        
        e.preventDefault()
        if (formData.name==="" && formData.message==="" && formData.email===""){
          
          alert('Please fill all the fields')
        }else{
          setLoading(true);

        const contact = {
          _type: "contact",
          name: formData.username,
          email: formData.email,
          message: formData.message,
        };
  
        client
          .create(contact)
          .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
          })
          .catch((err) => console.log(err));
        }
          
      
    
  };
 

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-4">Take a coffee & chat with us</h2>

        <motion.div
          className="app__footer-cards mx-auto"
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            animationDelay:0.5,
            animationTimingFunction:"ease-in-out",
            transition: {
              type: "spring",
              stiffness: 100,
              delay: 0.9,
            },
          }}
        >
          <div className="app__footer-card ">
            <img src={email2} alt="email" />
            <a href="mailto:adityaabraham039@gmail.com" className="p-text">
              adityaabraham039@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src={mobile} alt="phone" />
            <a href="tel:+91 9110178065" className="p-text">
              +91 9110178065
            </a>
          </div>
        </motion.div>
        {!isFormSubmitted ? (
          <motion.div className="app__footer-form mx-auto"
          
          initial={{
            x:'100vw',
            opacity:0
            

          }}
          animate={{
            x:0,
            opacity:1,
            transition:{
            type:'spring',
            stiffness:100,
            delay:0.5
            }

          }}
          
          >
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
                
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
                
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
                
              />
            </div>
            <motion.button type="button" className="btn-light" onClick={handleSubmit} whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
              {!loading ? "Send Message" : "Sending..."}
            </motion.button>
          </motion.div>
        ) : (
          <div >
            <h3 className="text-center fcolor">
              Thank you for getting in touch!
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
