import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>Wedding Organizer Murah di Bogor</h1>
            {/* <h2>Oemah Manten</h2> */}
            <p>
              OemahManten adalah penyedia jasa untuk memudahkan <br/> anda 
              dalam menyiapkan pernikahan. kami menyediakan berbagai
              paket pernikahan dengan harga terjangkau
            </p>
            <button className="main__btn">
              <a href="https://wa.wizard.id/Oemah" target="_blank">
                Contact us <i className="fab fa-whatsapp" />
              </a>
            </button>
          </div>
          <div className="main__img--container">
            <img
              src="https://res.cloudinary.com/djw882kt3/image/upload/v1655573318/Media/nikah-2_zk417c.jpg"
              alt="wedding"
              id="main__img"
              title="paket wedding organizer"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
