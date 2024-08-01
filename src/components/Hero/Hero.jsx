import React from 'react'
import './Hero.css'
import  dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
      <div className='hero-text'> 
<h1>The true purpose of education is to replace an empty mind with an open one</h1>
<p>Our cutting edge curriculum is designed to empower students with the knowledge ,skills, and experiences needed to excel in the dynamic field of education </p>
<button className='btn'> Explore more <img src={dark_arrow} alt=""/> 
</button>
      </div>
    </div>
  )
}

export default Hero