import React from "react";
import "../Plans/Plans.css";
import { diamondData } from "../../Data/diamondData"
import "./Diamond.css"
const Diamond = () => {
  return (
    <>
    <div className="title">
        <p className="Paket">Diamond Package</p>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657895351/Diamond/Diamond_hggxro.jpg"
          alt="Wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657895351/Diamond/DIamond_3_iedyr3.jpg"
          alt="Wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657895351/Diamond/Diamond_2_sbulog.jpg"
          alt="Wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657895352/Diamond/diamond_5_mwyrdf.jpg "
          alt="Wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657895351/Diamond/Diamond_4_x8p3ab.jpg"
          alt="Wedding organizer"
        />
      </div>
      <div className="details__items">
      <div className="details__item"></div>
      </div>
    
    <div className="plans-container">
      <div className="plans">
        {diamondData.map((plan, i) => (
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

export default Diamond;