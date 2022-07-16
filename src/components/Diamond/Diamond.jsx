import React from "react";
import "../Plans/Plans.css";
import { diamondData } from "../../Data/diamondData";
import "./Diamond.css";
import { Helmet } from "react-helmet-async";
const Diamond = () => {
  return (
    <>
      <Helmet>
        <title>paket wedding organizer </title>
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
        <link rel="canonical" href="/pricelist/paket-diamond"></link>
      </Helmet>
      <div className="title">
        <h1 className="Paket">Paket Diamond Oemah Manten</h1>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657895351/Diamond/Diamond_hggxro.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          width={50}
          height={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657895351/Diamond/DIamond_3_iedyr3.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          width={50}
          height={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657895351/Diamond/Diamond_2_sbulog.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          width={50}
          height={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657895352/Diamond/diamond_5_mwyrdf.jpg "
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          width={50}
          height={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657895351/Diamond/Diamond_4_x8p3ab.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          width={50}
          height={50}
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

export default Diamond;
