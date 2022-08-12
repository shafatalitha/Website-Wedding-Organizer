import React from "react";
import "./About.css";
import { Helmet } from "react-helmet-async";

export default function About() {
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
        <link rel="canonical" href="/about-us"></link>
      </Helmet>
      <div className="content">
        <div class="about">
          <div class="inner-section">
            <h1>Sejarah Singkat Oemah Manten</h1>
            <p className="text">
              Oemah Manten adalah badan usaha yang bergerak di bidang
              perencanaan, pengaturan, dan penyelenggaraan pernikahan yang
              berlokasi di Citeurep, Kabupaten Bogor. Sejak tahun 2016, kami
              melayani seluruh keperluan pernikahan mulai dari Foto Prewedding ,
              Tunangan, Make up, Upacara Adat, dan sebagainya. Oemah Manten juga
              melayani acara pernikahan untuk seluruh wilayah JABODETABEK .
            </p>
            <h2>Visi dan Misi</h2>
            <p className="text">
              Menjadi{" "}
              <a href="https://www.ruangmom.com/wedding-organizer.html">
                wedding organizer
              </a>{" "}
              terdepan dan terpercaya serta, memberikan pelayanan yang optimal,
              tenaga kerja yang kompeten di bidang nya dalam merencanakan dan
              mengelola acara pesta pernikahan maupun event yang
              berkesan/sempurna.
            </p>

            <div className="skills">
              <button>
                <a href="https://wa.wizard.id/Oemah">
                  Contact us <i className="fab fa-whatsapp" />
                </a>
              </button>
            </div>
            <div className="Peta">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.409322430973!2d106.86993686689175!3d-6.476980954188716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c03bac569ebf%3A0x3110482505f72a5b!2sOemah%20Manten!5e0!3m2!1sid!2sid!4v1657713231197!5m2!1sid!2sid"
                title="lokasi wedding organizer"
                width={500}
                height={400}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
