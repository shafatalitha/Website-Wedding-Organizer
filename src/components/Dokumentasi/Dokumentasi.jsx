import React from "react";
import "../Plans/Plans.css";
import { dokumentasiData } from "../../Data/dokumentasiData"
import "../Diamond/Diamond.css"
const Dokumentasi=()=> {
  return (
    <>
    <div className="title">
        <p className="Paket">Dokumentasi Package</p>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657937045/Dokumentasi/dokumentasi_4_asjthr.jpg"
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657937045/Dokumentasi/dokumentasi_2_jil39t.jpg"
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657937045/Dokumentasi/dokumentasi_1_fzxg0j.jpg"
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657937045/Dokumentasi/dokumentasi_y2pxn5.jpg "
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657937045/Dokumentasi/dokumentasi_6_vbhsam.jpg"
          alt="paket wedding organizer"
        />
      </div>
      <div className="details__items">
      <div className="details__item"></div>
      </div>
    
    <div className="plans-container">
      <div className="plans">
        {dokumentasiData.map((plan, i) => (
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

export default Dokumentasi;