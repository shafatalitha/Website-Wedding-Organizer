import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/testimoni">Testimoni</Link>
            <Link to="/about-us">Lokasi</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <a href="https://wa.wizard.id/Oemah">Whatsapp</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/oemahmanten.99/">Instagram</a>
            <a href="https://www.tiktok.com/@oemahmanten.99">Tiktok</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              OemahManten
            </Link>
            <small className="address">
              Jl. Puspanegara RT.02 RW.08 No.131, Citeureup, Bogor
            </small>
          </div>
          <small className="website-rights">Oemah © 2022</small>
          <div className="social-icons">
            <a
              href="https://www.tiktok.com/@oemahmanten.99"
              className="social-icon-link Tiktok"
              aria-label="tiktok"
            >
             
              <i className="fab fa-tiktok" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSl69h4vp4RdIkmCRjlDRmg"
              className="social-icon-link youtube"
              aria-label="youtube"
              
            >
             
              <i className="fab fa-youtube" />
            </a>
            <a
              href="https://www.instagram.com/oemahmanten.99/"
              className="social-icon-link instagram"
              aria-label="instagram"
            >
            
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
