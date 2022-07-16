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
          <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1655573318/Media/nikah-2_zk417c.jpg" />
          <div className="myCarousel">
            <h3>Andin</h3>
            <h4>Paket Gold</h4>
            <p>
             Terima kasih banyak, dekorasi bagus, aku juga suka banget sama hasil make up nya, 
             mohon maaf jika ada kata yang kurang berkenan, semoga sukses selalu
            </p>
          </div>
        </div>

        <div>
          <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1655573318/Media/nikah-2_zk417c.jpg" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1655573318/Media/nikah-2_zk417c.jpg" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}