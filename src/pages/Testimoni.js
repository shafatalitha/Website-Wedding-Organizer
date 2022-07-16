import React from 'react'
import Testimonials from '../components/Testimoni/Testimonials'
import {Helmet} from 'react-helmet-async'

const Testimoni = () => {
  return (
    <>
     <Helmet>
      <title>wedding organizer Bogor</title>
      <meta name="description" content="Jasa Wedding organizer murah di Bogor, menyediakan pilihan paket untuk tunangan,prewedding dan pernikahan adat maupun modern  "/>
      <link rel='canonical' href="/testimoni"></link>
    </Helmet>
  <Testimonials/>
  </>
  )
}

export default Testimoni