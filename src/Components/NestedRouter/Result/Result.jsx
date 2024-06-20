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
  if (localStorage.getItem("emotion") == 'Happy') {
    return (
      <div>
        <div className=' col-md-12 d-flex align-items-center justify-content-center'>

          <Lottie className='icon-result' animationData={img1} />

        </div>

        <h3 className=' text-center' style={{ color: "#CA4B7F" }}>{localStorage.getItem("emotion")}</h3>
        <br/>
        <h3 className=' text-center fontFamily text-capitalize' style={{ color: "var(--text)" }}>	"Dream as if you'll live forever, live as if you'll die today." - James Dean</h3>

      </div>
    )
  }
  else if (localStorage.getItem("emotion") == 'Angry') {
    return (
      <div>
        <div className=' col-md-12 d-flex align-items-center justify-content-center' >

          <Lottie className='icon-result' animationData={img2} />

        </div>

        <h3 className=' text-center' style={{ color: "#CA4B7F" }}>{localStorage.getItem("emotion")}</h3>
    <br/>
        <h3 className=' text-center fontFamily text-capitalize' style={{ color: "var(--text)" }}>	For every minute you remain angry, you give up sixty seconds of peace of mind</h3>

      </div>
    )
  }
  else if (localStorage.getItem("emotion") == 'Neutral') {
    return (
      <div>
        <div className=' col-md-12  d-flex align-items-center justify-content-center'>

          <Lottie animationData={img3} className='icon-result' />

        </div>

        <h3 className=' text-center' style={{ color: "#CA4B7F" }}>Natural</h3>
        <br/>
        <h3 className=' text-center fontFamily text-capitalize' style={{ color: "var(--text)" }}>	I hope you know how brave, important, sparkling, and wonderful </h3>

      </div>
    )
  }
  else if (localStorage.getItem("emotion") == 'Sad') {
    return (
      <div>
        <div className=' col-md-12 d-flex align-items-center justify-content-center'>

          <Lottie className='icon-result' animationData={img4} />

        </div>

        <h3 className=' text-center' style={{ color: "#CA4B7F" }}>{localStorage.getItem("emotion")}</h3>
        <br/>
        <h3 className=' text-center fontFamily text-capitalize' style={{ color: "var(--text)" }}>		don't quit yet, the worst moments are usually followed by the most beautiful silver lining</h3>

      </div>
    )
  }
  else if (localStorage.getItem("emotion") == 'Surprise') {
    return (
      <div>
        <div className=' col-md-12 d-flex align-items-center justify-content-center'>

          <Lottie className='icon-result' animationData={img5} />

        </div>
        

        <h3 className=' text-center' style={{ color: "#CA4B7F" }}>Surprised</h3>
        <br/>
        <h3 className=' text-center fontFamily text-capitalize' style={{ color: "var(--text)" }}>	Surprise (the good kind!):
          A sense of delight when someone brings you unexpected happiness or a situation goes even better than you had hoped. A sense of delight when someone brings you unexpected happiness or a situation goes even better than you had hoped.
        </h3>
      </div>
    )
  }
  else if (localStorage.getItem("emotion") == 'Calm') {
    return (
      <div>
        <div className=' col-md-12 d-flex align-items-center justify-content-center'>

          <Lottie className='icon-result' animationData={img6} />

        </div>
        <h3 className=' text-center' style={{ color: "#CA4B7F" }}>{localStorage.getItem("emotion")}</h3>
        <br/>
        <h3 className=' text-center fontFamily text-capitalize' style={{ color: "var(--text)" }}>	I hope you're getting enough sleep, eating well, and taking care of yourself.</h3>

      </div>
    )
  }
  else if (localStorage.getItem("emotion") == 'Disgust') {
    return (
      <div>
        <div className=' col-md-12 d-flex align-items-center justify-content-center'>

          <Lottie className='icon-result' animationData={img7} />

        </div>

        <h3 className=' text-center' style={{ color: "#CA4B7F" }}>Disgusted</h3>
        <br/>
        <h3 className=' text-center fontFamily text-capitalize' style={{ color: "var(--text)" }}>	Instead of resisting any emotion, the best way to dispel it is to enter it fully, embrace it and see through your resistance.</h3>

      </div>
    )
  }
  else (localStorage.getItem("emotion") == 'Fear'); {
    return (
      <div>
        <div className=' col-md-12 d-flex align-items-center justify-content-center'>

          <Lottie className='icon-result' animationData={img8} />

        </div>

        <h3 className=' text-center' style={{ color: "#CA4B7F" }}>Fear</h3>
        <br/>
        <h3 className=' text-center fontFamily text-capitalize' style={{ color: "var(--text)" }}>	It's completely okay to feel these feelings, and it's okay to be scared</h3>

      </div>
    )
  }
}

export default Result