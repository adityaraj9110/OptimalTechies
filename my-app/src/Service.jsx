import React from "react";
import Card from "./Card";
import dev from '../src/images/dev.svg'
import des from '../src/images/des.svg'
import devel from '../src/images/devel.svg'
const Service = () => {
  return (
    <div className="my-5">
      <h1 className="text-center tracking-in-contract-bck">Our Services</h1>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className=" row gy-4">
              <Card src={des}
                    title='Web Designing'
                    
                    
              
              />
              <Card src={dev}
                    title='Web Developers'
                   
                    
              
              />
              <Card src={devel}
                    title='python Developer'
                    
                  
              
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
