// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./NewRecord.css";
import { Link, Navigate } from "react-router-dom";
import Lottie from "lottie-react";
import stop from "../../../Animation/stop.json";
import sound from "../../../Animation/sound.json";
import { useTranslation } from "react-i18next"; //1
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Newrecord = () => {
  const { t, i18n } = useTranslation(); //2

  const navigate = useNavigate();

  const [stoprecording, setStopRecording] = useState(false);
  const [recording, setRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [error, setError] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  // select audio
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  // const handleUpload = () => {
  //   if (selectedFile) {
  //     console.log('Selected file:', selectedFile);
  //   }
  // };

  const formData = new FormData();
  formData.append("file", selectedFile);
  // formData.append("file", audioStream);

  async function sendRecord() {
    console.log(selectedFile)
    try {
      let { data } = await axios.post(
        `https://speech-emotions-874.onrender.com/emotions/enter-record`,
        formData,
        {
          headers: {
            token: `${localStorage.getItem("Token")}`,
          },
        }
      );
      console.log(data);
      if (data.message === "success") {
        localStorage.setItem("emotion", data.emotion);
        navigate("/homepage/result");
        setLoading(true);
      } else {
        setLoading(false);
        setError(data.errors.email.message);
      }
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioStream(stream);

      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      setError(
        t("Connect the microphone or allow the browser to play the sound")
      );
    }
  };

  const stopRecording = () => {
    if (audioStream) {
      audioStream.getTracks().forEach((track) => track.stop());
    }
    setRecording(false);
    URL.revokeObjectURL(audioUrl);
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setAudioChunks((prevChunks) => [...prevChunks, event.data]);
    }
  };

  useEffect(() => {
    if (recording) {
      const mediaRecorder = new MediaRecorder(audioStream);
      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
        console.log(audioBlob);
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };

      mediaRecorder.start();
      return () => {
        mediaRecorder.stop();
        setAudioChunks([]);
        URL.revokeObjectURL(audioUrl);
      };
    }
  }, [recording, audioStream, audioChunks]);

  function checkRecord() {
    if (recording) {
      stopRecording();
      setStopRecording(false);
    } else {
      startRecording();
      setStopRecording(true);
    }
  }
  return (
    <div className="parent-record d-flex flex-column align-items-center justify-content-around">
      <h4 className="sub-title new-color">
        {t("Click the button to start recording or import an audio")}
      </h4>
      <div className="d-flex align-items-center justify-content-center between">
        <div onClick={checkRecord}>
          <button
            className="btn border-0 "
            style={{
              color: "white",
              background: "#CA4B7F",
              width: "100px",
              height: "100px",
              borderRadius: "100px",
            }}
          >
            <i className="fa-solid fa-microphone fa-4x"></i>
          </button>
        </div>
        <input type="file" accept="audio/*" onChange={handleFileChange} />
      </div>
      <div>
        <div className="fs-3 text-center text-danger">{error}</div>
        <div className="parentLottie d-flex align-items-center justify-content-center">
          <div onClick={checkRecord}>
            {stoprecording && !Boolean(error) ? (
              <Lottie
                animationData={stop}
                className="lottieStop curser-pointer"
              />
            ) : (
              ""
            )}
          </div>
          <div>
            {stoprecording && !Boolean(error) ? (
              <Lottie animationData={sound} className="lottieSound" />
            ) : (
              ""
            )}
          </div>
        </div>

        {audioUrl && (
          <div>
            <audio controls src={audioUrl} />
          </div>
        )}
        {selectedFile && (
          <div className="text-center py-2 mt-3 sub-title">
            {selectedFile.name}
          </div>
        )}
      </div>
      {/* <Link to="/homepage/result"><button onClick={handleUpload} className="btn-f-page btn-record"> {t("Show Result")}</button></Link> */}
      <button onClick={sendRecord} className="btn-f-page btn-record">
        {loading ? <i className="fas fa-spinner fa-spin"></i> : "Show Result"}
      </button>
    </div>
  );
};

export default Newrecord;
