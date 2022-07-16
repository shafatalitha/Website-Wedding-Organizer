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
      <meta name="description" content="Jasa Wedding organizer murah di Bogor, menyediakan pilihan paket untuk tunangan,prewedding dan pernikahan adat maupun modern  "/>
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