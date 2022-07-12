import React from "react";
import "../Plans/Plans.css";
import { silverData } from "../../Data/silverData"
import "../Diamond/Diamond.css"
const Silver =()=> {
  return (
    <>
    <div className="title">
        <h1>Silver Package</h1>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg"
          alt="architecture"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg"
          alt="Wedding"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg"
          alt="Wedding"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg "
          alt="Wedding"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg"
          alt="Wedding"
        />
      </div>
      <div className="details__items">
      <div className="details__item"></div>
      </div>
    
    <div className="plans-container">
      <div className="plans">
        {silverData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <span key={i}><i className="fas fa-check" id="check"/>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
      </>
  );
};

export default Silver;