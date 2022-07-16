import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css"

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1657940694/Testimoni/yola_xxjllh.jpg"   alt="paket wedding organizer"/>
          <div className="myCarousel">
            <h3>Yola</h3>
            <h4>Paket Diamond</h4>
            <p>
             Terima kasih banyak, dekorasi bagus, aku juga suka banget sama hasil make up nya, 
             sukses selalu untuk Oemah Manten
            </p>
          </div>
        </div>

        <div>
          <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1657941248/Testimoni/ervi_1_ties1t.jpg"   alt="paket wedding organizer" />
          <div className="myCarousel">
            <h3>Ervi</h3>
            <h4>Paket Gold</h4>
            <p>
              Alhamdulillah, Acara berjalan lancar, terima kasih untuk bantuannya Oemah Manten
            </p>
          </div>
        </div>

        <div>
          <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1657941248/Testimoni/nadia_syfoc7.jpg"   alt="paket wedding organizer"/>
          <div className="myCarousel">
            <h3>Nadia</h3>
            <h4>Paket Gold</h4>
            <p>
              Acara berjalan lancar, semua jadi Happy! Thank you Oemah Manten!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}