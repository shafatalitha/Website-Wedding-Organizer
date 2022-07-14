import React from "react";
import "./Reasons.css";
const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
      <div className="left-r">
        <img src='https://res.cloudinary.com/djw882kt3/image/upload/v1657770306/Media/pernikahan_2_yzuq4d.jpg'alt="" />
        <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1657770307/Media/prewedding_1_edsmtt.jpg" alt="" />
        <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1657771278/Media/prewedding_2_ld2hkj.jpg" alt="" />
        <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1657771269/Media/prewedding_3_yh5rwf.jpg" alt="" />
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
              <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1657773692/Media/empatmata.event.organizer_I_2022_Jul_14_11_40_11_tasqmq.jpg" alt="" />
              <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1657773707/Media/clickpictura_jyoqdy.png" alt="" />
              <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1657774026/Media/welkinmusic_ahuai5.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;