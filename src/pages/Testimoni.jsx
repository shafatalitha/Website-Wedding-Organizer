import React from 'react'
import Testimonials from '../components/Testimoni/Testimonials'
import {Helmet} from 'react-helmet-async'

const Testimoni = () => {
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
      <link rel='canonical' href="/testimoni"></link>
    </Helmet>
  <Testimonials/>
  </>
  )
}

export default Testimoni