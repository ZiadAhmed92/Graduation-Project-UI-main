import { Link } from "react-router-dom";
import logo2 from "../../image/onboarding_2-removebg-preview.png";
import "./Welcome.css";
const WelcomeSecond = () => {
  return (
    <div className="welcome1">
      <div className=" text-center">
        <div className="text-center">
          <img src={logo2} className="logo1" />
        </div>
        <div className="paragraph-welcome1 w-100 m-auto">
          <h6>
            The voice often reflects underlying emotion through tone and pitch.
          </h6>
          <h6>
            {" "}
            <span className="sub-title">Through SER</span>, we can determine the
            feeling from speech, it shows the emotions that your voice holds.
          </h6>
          <h6 className="text-wel2">
            {" "}
            It shows the result in the form of emojis that describe your
            feelings.
          </h6>
        </div>
        
        <div className="text-center">
          <Link to="/welcomethird">
            {" "}
            <button className="btn-welcome1 ">Next</button>
          </Link>
          <div className="d-flex justify-content-center align-items-center fixed-bottom">
        <Link  to="/"><button className="btn rounded-5" style={{background:"gray"}} >  </button></Link>
              <Link  to="#"><button className="btn rounded-5 mx-4" style={{color:"white",background:"#dc0b62"}} > </button></Link>
              <Link  to="/welcomethird"><button className="btn rounded-5" style={{background:"gray"}} >  </button></Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSecond;
