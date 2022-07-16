import React from "react";
import "../Plans/Plans.css";
import { silverData } from "../../Data/silverData"
import "../Diamond/Diamond.css"
const Silver =()=> {
  return (
    <>
    <div className="title">
        <p className="Paket">Silver Package</p>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657891427/Silver/silver_2_b6pztg.jpg"
          alt="Wedding Organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657891488/Silver/silver_5_puhyre.jpg"
          alt="Wedding Organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657891433/Silver/silver_3_dextx3.jpg"
          alt="Wedding Organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657891440/Silver/silver_4_g6xetb.jpg"
          alt="Wedding Organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657891420/Silver/silver_cfhkvg.jpg"
          alt="Wedding Organizer"
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