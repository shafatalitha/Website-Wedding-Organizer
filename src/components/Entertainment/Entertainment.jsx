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
          content="wedding organizer murah, wedding organizer Bogor, wedding organizer JABODETABEK,paket wedding organizer,
         prewedding Bogor, prewedding JABODETABEK, prewedding murah"
        />
        <meta
          name="keyword"
          content="wedding organizer murah, wedding organizer Bogor, wedding organizer JABODETABEK,  paket wedding organizer, 
          prewedding Bogor, prewedding JABODETABEK, prewedding murah"
        />
        <link rel="canonical" href="/pricelist/paket-entertainment"></link>
      </Helmet>
      <div className="title">
        <h1 className="Paket">Paket Entertainment Oemah Manten</h1>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657943099/entertainment/entertainment_1_mvc831.jpg"
          alt="paket pernikahan wedding organizer	"
          height={50}
          width={50}
          title="paket pernikahan wedding organizer	"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657943099/entertainment/entertainment_qlmyjc.jpg"
          alt="paket pernikahan wedding organizer	"
          height={50}
          width={50}
          title="paket pernikahan wedding organizer	"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657943099/entertainment/entertainment_4_wp9hxs.jpg"
          alt="paket pernikahan wedding organizer	"
          height={50}
          width={50}
          title="paket pernikahan wedding organizer	"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657943098/entertainment/entertainment_3_zotmgi.jpg"
          alt="paket pernikahan wedding organizer	"
          height={50}
          width={50}
          title="paket pernikahan wedding organizer	"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657943098/entertainment/entertainment_2_luofgv.jpg"
          alt="paket wedding organizer"
          height={50}
          width={50}
          title="Paket pernikahan"
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
