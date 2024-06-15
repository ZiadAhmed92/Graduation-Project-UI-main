// eslint-disable-next-line no-unused-vars
import React from 'react'
import img1 from "../../../image/Happy.json"
import img2 from "../../../image/Angry.json"
import img3 from "../../../image/Neutral.json"
import img4 from "../../../image/Sad.json"
import img5 from "../../../image/Surprised.json"
import img6 from "../../../image/calm.json"
import img7 from "../../../image/disgust.json"
import img8 from "../../../image/fear.json"
import Lottie from 'lottie-react/build'
import './Result.css'
const Result = () => {
  if (localStorage.getItem("emotion")=='Happy') {
    return (
      <div>
            <div className=' col-md-12 d-flex align-items-center justify-content-center'>
              
            <Lottie className='icon-result' animationData={img1} />
                    
            </div>
            <h3 className=' text-center' style={{ color: "#CA4B7F" }}>{localStorage.getItem("emotion")}</h3>
      </div>
    )
  }
  else if (localStorage.getItem("emotion")=='Angry') {
    return (
      <div>
            <div className=' col-md-12 d-flex align-items-center justify-content-center' >
                
            <Lottie className='icon-result' animationData={img2} />
                    
            </div>
            <h3 className=' text-center' style={{ color: "#CA4B7F" }}>{localStorage.getItem("emotion")}</h3>
      </div>
    )
  }
  else if (localStorage.getItem("emotion")=='Neutral') {
    return (
      <div>
            <div className=' col-md-12 bg-danger d-flex align-items-center justify-content-center'>
              
                          <Lottie animationData={img3} className='icon-result' />
                    
            </div>
            <h3 className=' text-center' style={{ color: "#CA4B7F" }}>Natural</h3>
      </div>
    )
  }
  else if (localStorage.getItem("emotion")=='Sad') {
    return (
      <div>
            <div className=' col-md-12 d-flex align-items-center justify-content-center'>
              
            <Lottie className='icon-result' animationData={img4} />
                      
            </div>
            <h3 className=' text-center' style={{ color: "#CA4B7F" }}>{localStorage.getItem("emotion")}</h3>
      </div>
    )
  }
  else if (localStorage.getItem("emotion")=='Surprise') {
    return (
      <div>
            <div className=' col-md-12 d-flex align-items-center justify-content-center'>
              
            <Lottie className='icon-result' animationData={img5} />
                  
            </div>
            <h3 className=' text-center' style={{ color: "#CA4B7F" }}>Surprised</h3>
      </div>
    )
  }
  else if (localStorage.getItem("emotion")=='Calm') {
    return (
      <div>
            <div className=' col-md-12 d-flex align-items-center justify-content-center'>
                
            <Lottie className='icon-result' animationData={img6} />
                    
            </div>
            <h3 className=' text-center' style={{ color: "#CA4B7F" }}>{localStorage.getItem("emotion")}</h3>
      </div>
    )
  }
  else if (localStorage.getItem("emotion")=='Disgust') {
    return (
      <div>
            <div className=' col-md-12 d-flex align-items-center justify-content-center'>
                
            <Lottie className='icon-result' animationData={img7} />
                      
            </div>
            <h3 className=' text-center' style={{ color: "#CA4B7F" }}>Disgusted</h3>
      </div>
    )
  }
  else (localStorage.getItem("emotion")=='Fear'); {
    return (
      <div>
            <div className=' col-md-12 d-flex align-items-center justify-content-center'>
                
            <Lottie className='icon-result' animationData={img8} />
                    
            </div>
            <h3 className=' text-center' style={{ color: "#CA4B7F" }}>Fear</h3>
      </div>
    )
  }
}

export default Result