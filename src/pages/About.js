import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="content">
      <div class="about">
        <div class="inner-section">
          <h1>About Us</h1>
          <p className="text">
            Oemah Manten adalah perusahaan yang bergerak di bidang perencanaan,
            pengaturan, dan penyelenggaraan pernikahan. Dimulai dari proses
            pembuatan konsep, perencanaan, persiapan, eksekusi, hingga rangkaian
            acara selesai. Didirikan pada tahun 2016, Oemah Manten telah
            menyelesaikan lebih dari 100 pernikahan mulai dari Foto pre-wedding,
            tunangan, hingga acara resepsi. Oemah Manten berlokasi di Citeureup, Kabupaten Bogor.
            Oemah Manten melayani acara pernikahan untuk wilayah JABODETABEK.
          </p>
          <div className="skills">
          <button >
              <a href="https://wa.wizard.id/78dbb1" target="_blank">
                Contact us <i className="fab fa-whatsapp" />
              </a>
            </button>
          </div>
          <div className="Peta">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.409322430973!2d106.86993686689175!3d-6.476980954188716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c03bac569ebf%3A0x3110482505f72a5b!2sOemah%20Manten!5e0!3m2!1sid!2sid!4v1657713231197!5m2!1sid!2sid" width={500} height={400}style={{border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </div>
  );
}
