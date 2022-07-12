import React from 'react'
import Cards from '../components/Cards/Cards'
import Hero from '../components/Hero/Hero'
import Best from '../components/Best/Best'
import Reasons from '../components/Reasons/Reasons'


const Home=()=> {
    return (
      <>
    
        <Hero/>
        <Reasons/>
        <Best/>
        <Cards />
      </>
    )
  }

  export default Home