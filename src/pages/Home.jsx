import React from 'react'
import Hero from '../components/Hero/Hero'
import Best from '../components/Best/Best'
import Reasons from '../components/Reasons/Reasons'
import Demo from '../components/Demo/Demo'
import {Helmet} from 'react-helmet-async';


const Home=()=> {
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
      <link rel='canonical' href="/"></link>
    </Helmet>
        <Hero/>
        <Reasons/>
        <Best/>
        <Demo/>
        
      </>
    )
  }

  export default Home