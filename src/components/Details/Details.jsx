import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <>
      <div className="title">
        <p className="Paket">Gold Package</p>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657896044/Gold/gold_3_mqhlom.jpg"
          alt="Wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657896044/Gold/gold_2_ijt6xo.jpg"
          alt="Wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657896044/Gold/gold_1_wxbkv4.jpg"
          alt="Wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657896044/Gold/gold_tapbkk.jpg"
          alt="Wedding organizer"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1657896044/Gold/gold_4_lfkxwn.jpg"
          alt="Wedding organizer"
        />
      </div>
      <div className="details__items">
      <div className="details__item"></div>
      </div>
      </>
  )
}
export default Details