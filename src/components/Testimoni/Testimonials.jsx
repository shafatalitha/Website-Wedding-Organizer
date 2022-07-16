import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";
import { Helmet } from "react-helmet-async";

export default class Testimonials extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>wedding organizer Bogor</title>
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
          <link rel="canonical" href="/testimoni"></link>
        </Helmet>
        <h1 className="judul-testimoni">Testimoni Pelanggan Oemah Manten</h1>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div className="Testimoni">
            <img
              src="https://res.cloudinary.com/djw882kt3/image/upload/v1657940694/Testimoni/yola_xxjllh.jpg"
              height={100}
              width={50}
              alt="paket pernikahan wedding organizer"
              title="paket pernikahan wedding organizer"
            />
            <div className="myCarousel">
              <h3>Yola</h3>
              <h4>Paket Diamond</h4>
              <p>
                Terima kasih banyak, dekorasi bagus, aku juga suka banget sama
                hasil make up nya, sukses selalu untuk Oemah Manten
              </p>
            </div>
          </div>

          <div className="Testimoni">
            <img
              src="https://res.cloudinary.com/djw882kt3/image/upload/v1657941248/Testimoni/ervi_1_ties1t.jpg"
              height={100}
              width={50}
              alt="paket pernikahan wedding organizer"
              title="paket pernikahan wedding organizer"
            />
            <div className="myCarousel">
              <h3>Ervi</h3>
              <h4>Paket Gold</h4>
              <p>
                Alhamdulillah, Acara berjalan lancar, terima kasih untuk
                bantuannya Oemah Manten
              </p>
            </div>
          </div>

          <div className="Testimoni">
            <img
              src="https://res.cloudinary.com/djw882kt3/image/upload/v1657941248/Testimoni/nadia_syfoc7.jpg"
              height={100}
              width={50}
              alt="paket pernikahan wedding organizer"
              title="paket pernikahan wedding organizer"
            />
            <div className="myCarousel">
              <h3>Nadia</h3>
              <h4>Paket Gold</h4>
              <p>
                Acara berjalan lancar, semua jadi Happy! Thank you Oemah Manten!
              </p>
            </div>
          </div>
        </Carousel>
      </>
    );
  }
}
