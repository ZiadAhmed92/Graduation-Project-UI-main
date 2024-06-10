import React from 'react'
import { Link } from 'react-router-dom'
import img2 from "../../image/thanks.json"
import "./ThankYou.css"
import Lottie from 'lottie-react'
const ThankYou = () => {
  return (
    <div>
 <div className="container">
  <div className="row">
    <div className="col-md-12 d-flex align-items-center justify-content-center ">
      <div >
            <Lottie loop={false} animationData={img2} />
      </div>
    </div>
    <div className='d-flex justify-content-center align-items-center'>
    <Link to="/homepage/suggestion"><button className="btn-suggestion ">Done</button></Link>
    </div>

  </div>
 </div>
    </div>
  )
}

export default ThankYou