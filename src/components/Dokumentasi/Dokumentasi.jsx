import React from "react";
import "../Plans/Plans.css";
import { dokumentasiData } from "../../Data/dokumentasiData"
import "../Diamond/Diamond.css"
import { Helmet } from "react-helmet-async";

const Dokumentasi=()=> {
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
        <link rel="canonical" href="/pricelist/paket-dokumentasi"></link>
      </Helmet>
    <div className="title">
        <h1 className="Paket">Paket Dokumentasi Oemah Manten</h1>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657937045/Dokumentasi/dokumentasi_4_asjthr.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657937045/Dokumentasi/dokumentasi_2_jil39t.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657937045/Dokumentasi/dokumentasi_1_fzxg0j.jpg"
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657937045/Dokumentasi/dokumentasi_y2pxn5.jpg "
          alt="paket pernikahan wedding organizer"
          title="paket pernikahan wedding organizer"
          height={50}
          width={50}
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657937045/Dokumentasi/dokumentasi_6_vbhsam.jpg"
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