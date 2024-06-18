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
  const [message, setMessage] = useState({
    message: "",
  });
  async function sendMessage() {
    try {
      let { data } = await axios.post(`https://speech-emotions-874.onrender.com/message`, {
        message,
      });

      if (data.message === 'Your note has been sent') {
        console.log("first")
        Navigate("/thanks");
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
    
    sendMessage();
  }
  return (
    <form onSubmit={submitMessage} className='text-center d-flex flex-column align-items-center justify-content-center'>
      <h3 style={{ color: "var(--text)" }} className='suggest-text'>{t("Get In Touch")}</h3>
      <textarea id="w3review" name="suggestion" placeholder={t("Message")} className='textarea'>
        
      </textarea>
      <div className=''>
        <button className="btn-suggestion" type='submit'>{t("Send")}</button>
        <div className='lottie d-flex align-items-center'><Lottie loop={false} animationData={done} style={{ height: "37px" }} />{t("Message has been sent")}</div>
        
      </div>
      
    </form>
  )
}

export default Suggestion