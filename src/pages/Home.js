import React from 'react'
import Cards from '../components/Cards/Cards'
import Hero from '../components/Hero/Hero'
import Best from '../components/Best/Best'
// import Aboutpage from '../components/about-us/Aboutpage'
import Reasons from '../components/Reasons/Reasons'


const Home=({refPriceList})=> {
    return (
      <>
    
        <Hero/>
        <Reasons/>
        {/* <Aboutpage/> */}
        <Best/>
        <Cards refPriceList={refPriceList}/>
      </>
    )
  }

  export default Home