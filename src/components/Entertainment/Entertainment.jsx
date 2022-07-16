import React from "react";
import "../Plans/Plans.css";
import { entertainmentData } from "../../Data/entertainmentData";
import "../Diamond/Diamond.css";
import { Helmet } from "react-helmet-async";

const Entertainment = () => {
  return (
    <>
      <Helmet>
        <title>paket wedding organizer</title>
        <meta
          name="description"
          content="Jasa Wedding organizer murah di Bogor, menyediakan pilihan paket untuk tunangan,prewedding dan pernikahan adat maupun modern  "
        />
        <link rel="canonical" href="/entertainment"></link>
      </Helmet>
      <div className="title">
        <p className="Paket">Entertainment Package</p>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657943099/entertainment/entertainment_1_mvc831.jpg"
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657943099/entertainment/entertainment_qlmyjc.jpg"
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657943099/entertainment/entertainment_4_wp9hxs.jpg"
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657943098/entertainment/entertainment_3_zotmgi.jpg"
          alt="paket wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657943098/entertainment/entertainment_2_luofgv.jpg"
          alt="paket wedding organizer"
        />
      </div>
      <div className="details__items">
        <div className="details__item"></div>
      </div>

      <div className="plans-container">
        <div className="plans">
          {entertainmentData.map((plan, i) => (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>{plan.price}</span>
              <div className="features">
                {plan.features.map((feature, i) => (
                  <div className="feature">
                    <span key={i}>
                      <i className="fas fa-check" id="check" />
                      {feature}
                    </span>
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

export default Entertainment;
