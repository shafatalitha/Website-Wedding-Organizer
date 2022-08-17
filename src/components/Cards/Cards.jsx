import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id='pricelist' >
      <h1>Harga Paket Oemah Manten</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://res.cloudinary.com/djw882kt3/image/upload/v1655566640/Media/wedding_wcihya.jpg' 
              text='Paket Silver Wedding '
              label='IDR 21.000.000'
              path='/pricelist/paket-silver'
            />
            <CardItem
            
              src='https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/bogor_gucmol.jpg'
              text=' Paket Gold Wedding '
              label='IDR 26.000.000'
              path='/pricelist/paket-gold'
            />
             <CardItem
              src='https://res.cloudinary.com/djw882kt3/image/upload/v1655566641/Media/nikah_zmm45x.jpg'
              text='Paket Diamond Wedding'
              label='IDR 30.000.000'
              path='/pricelist/paket-diamond'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://res.cloudinary.com/djw882kt3/image/upload/v1655566640/Media/mua_lxllww.jpg'
              text='Paket MUA '
              label='Start from IDR 6.000.000'
              path='/pricelist/paket-mua'
            />
            <CardItem
              src='https://res.cloudinary.com/djw882kt3/image/upload/v1655627822/Media/musik_pcidge.jpg'
              text='Paket Entertainment'
              button= 'lihat'
              label='Start from IDR 1000.000'
              path='/pricelist/paket-entertainment'
            />
            <CardItem
              src='https://res.cloudinary.com/djw882kt3/image/upload/v1655568304/Media/tunangan_dcviol.jpg'
              text='Paket Engagement'
              button= 'lihat'
              label='IDR 7.500.000'
              path='/pricelist/paket-engagement'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://res.cloudinary.com/djw882kt3/image/upload/v1655573318/Media/nikah-3_kjclfs.jpg'
              text='Paket Dokumentasi'
              button= 'lihat'
              label='Start from IDR 3000.000'
              path='/pricelist/paket-dokumentasi'
            />
            <CardItem
              src='https://res.cloudinary.com/djw882kt3/image/upload/v1655575207/Media/jawa_py7ufr.jpg'
              text='Paket Adat Jawa'
              button= 'lihat'
              label='Start from IDR 1000.000'
              path='/pricelist/adat-jawa'
            />
            <CardItem
              src='https://res.cloudinary.com/djw882kt3/image/upload/v1655575208/Media/sunda_gdfino.jpg'
              text='Paket Adat Sunda'
              button= 'lihat'
              label='Start from IDR 1000.000'
              path='/pricelist/adat-sunda'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;