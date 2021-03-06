import React from "react";
import "../Plans/Plans.css";
import { sundaData } from "../../Data/sundaData"
import "../Diamond/Diamond.css"
import { Helmet } from "react-helmet-async";

const Sunda=()=> {
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
        <link rel="canonical" href="/pricelist/adat-sunda"></link>
      </Helmet>
    <div className="title">
        <h1 className="Paket">Paket pernikahan Adat Sunda </h1>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657939429/Sunda/sunda_1_abpdr1.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657939429/Sunda/sunda_2_bhtwcg.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657939429/Sunda/sunda_4_hqcvm3.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657939429/Sunda/sunda_5_exvkyt.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657939429/Sunda/sunda_3_mtjbns.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
      </div>
      <div className="details__items">
      <div className="details__item"></div>
      </div>
    
    <div className="plans-container">
      <div className="plans">
        {sundaData.map((plan, i) => (
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

export default Sunda;