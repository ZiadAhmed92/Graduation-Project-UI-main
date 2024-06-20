import React, { useState } from 'react'
import "./Suggestion.css"
import Lottie from "lottie-react";
import done from "../../../Animation/done.json";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';//1
import axios from 'axios';

const Suggestion = () => {
  const { t, i18n } = useTranslation();//2
  let Navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  console.log(Boolean(message))
  async function sendMessage() {
    try {
      let { data } = await axios.post(`https://speech-emotions-874.onrender.com/message`, {
        message,
      });

      if (data.message === 'Your note has been sent') {
        
        Navigate("/thanks");
        console.log("fady")
        setLoading(false);
      } else {
        setLoading(false);
        console.log("first2")
        setError(data.message);
      }
    } catch (err) {
      // setError(err);
      setLoading(false);
      console.log(err)
    }
  }

  function submitMessage(e) {
    e.preventDefault();
    setLoading(true);
    if (message.trim()){
      sendMessage();
    }else{
      setError("Please Enter Message")
      setLoading(false);
    }
  }
  return (
    <form onSubmit={submitMessage} className='text-center d-flex flex-column align-items-center justify-content-center'>
      <h3 style={{ color: "var(--text)" }} className='suggest-text'>{t("Get In Touch")}</h3>
      <textarea id="w3review" name="suggestion" placeholder={t("Message")} className='textarea' onChange={(e) => setMessage(e.target.value)}>
        
      </textarea>
      <div className=''>
        <h4 className='fontFamily text-danger'>{error}</h4>
        <button className="btn-suggestion" type='submit'>{loading ? <i className="fas fa-spinner fa-spin"></i> :t("Send")}</button>
        {/* <div className='lottie d-flex align-items-center'><Lottie loop={false} animationData={done} style={{ height: "37px" }} />{t("Message has been sent")}</div> */}
        
      </div>
      
    </form>
  )
}

export default Suggestion