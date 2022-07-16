import React from 'react'
import Details from '../components/Details/Details'
import Plans from '../components/Plans/Plans'
import { Helmet } from "react-helmet-async";

const Gold = () => {
  return (
    <>
    <Helmet>
        <title>paket wedding organizer </title>
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
        <link rel="canonical" href="/pricelist/paket-gold"></link>
      </Helmet>

    <Details/>
    <Plans/>
    </>
  )
}

export default Gold