import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>Wedding Organizer</h1>
            <h2>Oemah Manten</h2>
            <p>
              OemahManten adalah penyedia jasa untuk memudahkan anda <br/>dalam
              menyiapkan pernikahan. kami menyediakan berbagai<br/> paket pernikahan
              dengan harga yang terjangkau
            </p>
            <button className="main__btn">
              <a href="#">View Pricelist</a>
            </button>
          </div>
          <div className="main__img--container">
            <img
              src="https://res.cloudinary.com/djw882kt3/image/upload/v1655573318/Media/nikah-2_zk417c.jpg"
              alt="wedding"
              id="main__img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
