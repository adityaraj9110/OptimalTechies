// import React, { useState, useEffect } from "react";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import { motion } from "framer-motion";
// // import MotionWrap from "./wrapper/Motion_wrap";

// // import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from "./client";
// import "./testimonial.scss";

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [testimonials, setTestimonials] = useState([]);

//   const handleClick = (index) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const query = '*[_type == "testimonials"]';
//     // const brandsQuery = '*[_type == "brands"]';

//     client.fetch(query).then((data) => {
//       setTestimonials(data);
//     });

//     // client.fetch(brandsQuery).then((data) => {
//     //   setBrands(data);
//     // });
//   }, []);

//   return (
//     <>
//       {testimonials.length && (
//         <>
//           <div className="container">
//             <div className="app__testimonial-item app__flex">
//               <img
//                 src={urlFor(testimonials[currentIndex].imgurl)}
//                 alt={testimonials[currentIndex].name}
//               />
//               <div className="app__testimonial-content">
//                 <p className="p-text">{testimonials[currentIndex].feedback}</p>
//                 <div>
//                   <h4 className="bold-text">
//                     {testimonials[currentIndex].name}
//                   </h4>
//                   <h5 className="p-text">
//                     {testimonials[currentIndex].company}
//                   </h5>
//                 </div>
//               </div>
//             </div>

//             <div className="app__testimonial-btns app__flex">
//               <div
//                 className="app__flex"
//                 onClick={() =>
//                   handleClick(
//                     currentIndex === 0
//                       ? testimonials.length - 1
//                       : currentIndex - 1
//                   )
//                 }
//               >
//                 <HiChevronLeft />
//               </div>

//               <div
//                 className="app__flex"
//                 onClick={() =>
//                   handleClick(
//                     currentIndex === testimonials.length - 1
//                       ? 0
//                       : currentIndex + 1
//                   )
//                 }
//               >
//                 <HiChevronRight />
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };
// export default Testimonial

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./testimonial.css"
import Aditya from '../src/images/Aditya.jpeg'
import Divansh from '../src/images/Divansh3.jpg'
import Keshav from '../src/images/Keshav.jpeg'
import Shivam from '../src/images/Shivam.jpeg'
import Devank from '../src/images/Devank.jpeg'

export default function Testimonials () {
  
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2100}
      >
        <div>
          <img src={Aditya} />
          <div className="myCarousel">
            <h3>Aditya Raj</h3>
            <h4>project Lead</h4>
            <p>
              RactJS and python developer.Work experience in OpenCV and Speech-Recognition.
            </p>
          </div>
        </div>

        <div>
          <img src={Divansh} />
          <div className="myCarousel">
            <h3>Divansh Bajaj</h3>
            <h4>Developer</h4>
            <p>
              Python developer having work experience in AI modules like OpenCV and FACE-RECOGNITION.
            </p>
          </div>
        </div>

        <div>
          <img src={Keshav} />
          <div className="myCarousel">
            <h3>Keshav Kumar</h3>
            <h4>Technical Leader</h4>
            <p>
            Front-end engineer and a software developer.
            </p>
          </div>
        </div>

        <div>
          <img src={Shivam} />
          <div className="myCarousel">
            <h3>Shivam Sinha</h3>
            <h4>Intern</h4>
            <p>
              Learning New Technologies 
            </p>
          </div>
        </div>

        <div>
          <img src={Devank} />
          <div className="myCarousel">
            <h3>Devank</h3>
            <h4>Developer</h4>
            <p>
             Front-end Developer
            </p>
          </div>
        </div>
      </Carousel>
    );
  
}
