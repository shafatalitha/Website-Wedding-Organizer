import React from "react";
import "../Plans/Plans.css";
import { muaData } from "../../Data/muaData"
import "../Diamond/Diamond.css"
import { Helmet } from "react-helmet-async";


const Mua=()=> {
  return (
    <>
    <Helmet>
        <title> paket wedding organizer </title>
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
        <link rel="canonical" href="/pricelist/paket-mua"></link>
      </Helmet>
    <div className="title">
        <h1 className="Paket">Paket MUA Oemah Manten</h1>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657898753/mua/mua_4_djea5j.jpg"
          alt="paket pernikahan wedding organizer"
           title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src=  "https://res.cloudinary.com/djw882kt3/image/upload/v1657898925/mua/mua_5_ch2ebr.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657898753/mua/mua_1_zzokdp.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657898753/mua/mua_3_edpx8x.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657898753/mua/mua_d1cpi5.jpg"
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
        {muaData.map((plan, i) => (
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

export default Mua;