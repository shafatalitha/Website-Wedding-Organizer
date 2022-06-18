import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
  <>
  <section className='home'>
    <div className='container flex'>
      <div className='left'>
        <div className='img'>
          <img src='https://res.cloudinary.com/djw882kt3/image/upload/v1655452120/Media/DSC_2843_lfemev.jpg'alt=''/>
        </div>
      </div>
      <div className='right topMargin'>
            <h1>
              Wedding Organizer JABODETABEK
            </h1>
            <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='primary-btn'>Contact Us</button>
          </div>
        </div>
  </section>
  </>
  )
}

export default Hero