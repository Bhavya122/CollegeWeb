import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState})=>  {
  return (
    <div className='about'>

      
    <div className='about-left'> 
    <img src={about_img} alt="" className='about-img'/>
    <img src={play_icon} alt="" className='play-icon' onClick={()=>{
      setPlayState(true)}}/>
    </div>
    <div className='about-right'>
      <h3> ABOUT COLLEGE</h3>
      <h2> Nurturing Tomorrow's Leader Today</h2>
      <p> "The institute is committed to the challenging task of development of technical education by preparing seasoned graduates in highly sophisticated field of engineering and technology. Development of India as an emerging industrial power is a demanding exercise as it involves the combination of cost effectiveness and efficiency along with producing world-class technology at the cutting edge. For about five decades we have been doing it with sincerity and commitment at NIT Raipur. At present the institute offers graduate level courses in twelve disciplines."</p>
       </div>
    </div>
  )
}

export default About