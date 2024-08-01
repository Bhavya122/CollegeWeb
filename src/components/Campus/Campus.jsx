import React ,{useRef}from 'react'
import './Campus.css'
import camp_3 from '../../assets/camp3.jpeg'
import camp_4 from '../../assets/camp4.jpeg'
import camp_5 from '../../assets/camp5.jpeg'
import camp_6 from '../../assets/camp6.jpeg'
import camp_1 from '../../assets/camp1.jpeg'
import camp_2 from '../../assets/camp2.jpeg'


import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'


function Campus() {
  const slider=useRef();
 let tx=0;
  const slideForward=()=>{
 
if(tx>-50){
  tx-=33.33;

}
 slider.current.style.transform=`translateX(${tx}%)`
  }
  const slideBackward=()=>{
    if(tx<0){
      tx += 33.33;
    
    }
     slider.current.style.transform=`translateX(${tx}%)`
  }

  
  

  
  return (
    <div className='campus'>
<img src={next_icon} alt="" className='next-btn'onClick={slideForward}  />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />

      <div className="gallery">
      
       <ul ref={slider}>
       <li> <img src={camp_2} alt="" className='camppic'/>
       
       </li>
       <li><img src={camp_3} alt="" className='camppic'/></li>
       <li> <img src={camp_4} alt="" className='camppic'/></li>
       <li><img src={camp_1} alt="" className='camppic'/></li>
       <li> <img src={camp_5} alt="" className='camppic'/></li>
       <li> <img src={camp_6} alt="" className='camppic'/></li>
       
        </ul>
      </div>
      
    </div>
  )
}

export default Campus