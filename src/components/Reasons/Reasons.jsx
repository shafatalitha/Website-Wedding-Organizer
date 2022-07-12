import React from "react";
import "./Reasons.css";
const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
      <div className="left-r">
        <img src='https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg'alt="" />
        <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg" alt="" />
        <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg" alt="" />
        <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg" alt="" />
      </div>
      <div className="right-r">
        <span>Beberapa Alasan</span>
        <div>
          <span className="stroke-text">Mengapa harus </span>
          <span>Oemah Manten?</span>
        </div>
        <div className="details-r">
          <div>
            <span><i className="fas fa-check" id="check"></i>Tim profesional dan berpengalaman</span>
          </div>
          <div>
            <span><i className="fas fa-check" id="check"></i>Fast Respon</span>
          </div>
          <div>
            <span><i className="fas fa-check" id="check"></i>Harga Terjangkau</span>
          </div>
          <div>
            <span><i className="fas fa-check" id="check"></i>Partner Terpercaya</span>
          </div>
        </div>
        <span style={{color: "var(--black)", fontWeight: "normal"}}>OUR PARTNERS</span>
        <div className="partners">
              <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg" alt="" />
              <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg" alt="" />
              <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;