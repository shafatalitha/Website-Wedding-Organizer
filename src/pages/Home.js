import React from 'react'
import Cards from '../components/Cards/Cards'
import Hero from '../components/Hero/Hero'
import Best from '../components/Best/Best'
import Services from '../components/Services/Services'


const Home=()=> {
    return (
      <>
        <Hero/>
        <Services/>
        <Best/>
        <Cards/>
      </>
    )
  }

  export default Home