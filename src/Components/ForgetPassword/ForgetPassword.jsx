import "./ForgetPassword.css";
// import img1 from "../../image/backPage.png";
import think from "../../Animation/think.json";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
export const ForgetPassword = () => {
  let Navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState({
    email: "",
  });
  async function sendUserData() {
    try {
      let { data } = await axios.post(`https://speech-emotions-874.onrender.com/users/forgot-password`, {
        email,
      });
console.log(data)
      if (data.message === 'Password reset email sent') {
        console.log("first")
        setMessage("We Have Sent Your Email");
        Navigate("/login");
        
        setLoading(false);
      } else {
        setLoading(false);
        console.log("first2")
        setError(data.message);
      }
    } catch (err) {
      setError(err.response.data);
      setLoading(false);
      console.log(err)
    }
  }

  function submitResetPassword(e) {
    setLoading(true);
    e.preventDefault();
    sendUserData();
  }
  return (
    <div>
      <div className="container pt-2">
        <div className="row mt-2">
          

          <div className="col-md-6 forget-parent ">
            <div className="text-forget-pass text-capitalize mt-4 fontfamily">
              <span className="sub-title sub-title-forget ">
                {" "}
                Forgot Your Password ?
              </span>
              <br /> Enter Your Registed Email
              <br /> Below To Recieve Password Reset
              <br /> Instruction
            </div>
            <form onSubmit={submitResetPassword} className="d-flex flex-column">
              <p className="text-start text-capitalize text-danger ">{error.message || error}</p>
              <p className="text-start text-capitalize  text-info">{message}</p>
              <div className="media-desktop mb-3">
                <Lottie animationData={think} />
              </div>
              <input
                type="email"
                className="input-forget fontfamily"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn-forget bt-forget fontfamily" type="submit">
                {loading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  "Send Reset Link"
                )}{" "}
              </button>
            </form>
          </div>
          <div className="col-md-6 media-mobile">
            <Lottie animationData={think} />
          </div>
        </div>
      </div>
    </div>
  );
};
