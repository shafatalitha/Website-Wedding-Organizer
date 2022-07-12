import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <>
      <div className="title">
        <h1>Gold Package</h1>
      </div>
      <div className="image-grid">
        <img
          className="image-grid-col-2 image-grid-row-2"
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg"
          alt="architecture"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg"
          alt="Wedding"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg"
          alt="Wedding"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg "
          alt="Wedding"
        />
        <img
          src="https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg"
          alt="Wedding"
        />
      </div>
      <div className="details__items">
      <div className="details__item"></div>
      </div>
      </>
  )
}
export default Details