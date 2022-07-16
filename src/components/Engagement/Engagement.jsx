import React from "react";
import "../Plans/Plans.css";
import { engagementData } from "../../Data/engagementData"
import "../Diamond/Diamond.css"
const Engagement=()=> {
  return (
    <>
    <div className="title">
        <p className="Paket">Engagement Package</p>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657903079/engagement/engagement_4_wzciox.jpg"
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657903079/engagement/engagement_3_qsps3h.jpg"
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657903079/engagement/engagement_2_ei6brc.jpg"
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657903079/engagement/engagement_h4rjdz.jpg "
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657903691/engagement/engagement_5_lb8k94.jpg"
          alt="paket wedding organizer"
        />
      </div>
      <div className="details__items">
      <div className="details__item"></div>
      </div>
    
    <div className="plans-container">
      <div className="plans">
        {engagementData.map((plan, i) => (
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

export default Engagement;