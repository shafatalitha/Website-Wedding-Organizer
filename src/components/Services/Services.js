import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
        <div className='services__container'>
        <div>
            <img src="https://res.cloudinary.com/djw882kt3/image/upload/v1655573319/Media/nikah-1_cozjz8.jpg" className='services__img'alt='wedding'/>
          </div>
          <div>
            <h2 className = "services__heading">Why should choose us?</h2>
            <div className="service__features">
            <p className="service__feature">
             <i className='fas fa-check-circle'/> Prewedding
            </p>
            <p className="service__feature">
            <i className='fas fa-check-circle'/> Prewedding
            </p>
            <p className="service__feature">
            <i className='fas fa-check-circle'/> Prewedding
            </p>
            <p className="service__feature">
            <i className='fas fa-check-circle'/> Prewedding
            </p>
          </div>
          </div>
        </div>
    </div>

   
  )
}

export default Services;