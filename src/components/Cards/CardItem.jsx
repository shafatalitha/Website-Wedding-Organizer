import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
function CardItem(props) {
  return (
    <>
    <Helmet>
      <title>harga wedding organizer</title>
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
      <link rel='canonical' href="/pricelist"></link>

    </Helmet>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt="harga wedding organizer"
              src={props.src}
              height= "40"
              width="40"
              title="harga wedding organizer"
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p className='cards__item__button'>{props.button}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;