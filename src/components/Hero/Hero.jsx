import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>Wedding Organizer Murah di Bogor</h1>
            <h2>
              Oemah Manten adalah jasa <a href="https://www.ruangmom.com/wedding-organizer.html">wedding organizer </a>yang berlokasi <br/>di <a href="https://id.wikipedia.org/wiki/Kabupaten_Bogor">Kabupaten Bogor</a>. Kami bertugas untuk 
              memudahkan anda dalam menyiapkan pernikahan. kami menyediakan berbagai paket pernikahan dengan
              dengan harga terjangkau
            </h2>
            <button className="main__btn">
              <a href="https://wa.wizard.id/Oemah" >
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
