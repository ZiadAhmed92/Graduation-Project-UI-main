// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react";
import stop from "../../../Animation/stop.json"
import sound from "../../../Animation/sound.json"
import imgRecord from '../../../image/import.png'
import imgFile from '../../../image/record.png'
import "./NewRecord.css"
import { useNavigate } from 'react-router-dom';
const AudioRecorder = () => {
  let navigate = useNavigate()
  const [record, setRecord] = useState(false);
  const [message, setMessage] = useState("");
  const [path, setPath] = useState(null);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const initRecorder = () => {
    const tempPath = `${window.location.href}/tmp`;
    setPath(tempPath);
  };

  const startRecording = async () => {
    if (path) {
      setRecord(true);
    } else {
      initRecorder()
      setRecord(true);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    setRecordedBlob(recordedBlob); // حفظ recordedBlob في الحالة
  };

  const encodeWav = (samples, sampleRate) => {
    const buffer = new ArrayBuffer(44 + samples.length * 2);
    const view = new DataView(buffer);

    const writeString = (view, offset, string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    const floatTo16BitPCM = (output, offset, input) => {
      for (let i = 0; i < input.length; i++, offset += 2) {
        const s = Math.max(-1, Math.min(1, input[i]));
        output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
      }
    };

    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + samples.length * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, samples.length * 2, true);

    floatTo16BitPCM(view, 44, samples);

    return new Blob([view], { type: 'audio/wav' });
  };

  const encodeAudio = async (blob) => {
    const arrayBuffer = await blob.arrayBuffer();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const samples = audioBuffer.getChannelData(0); // assuming mono channel
    const encodedWav = encodeWav(samples, audioBuffer.sampleRate);
    return encodedWav;
  };

  const sendRecord = async () => {
    stopRecording()
    setLoading(true);
    console.log(selectedFile, recordedBlob)
    if (recordedBlob || selectedFile) {
      try {
        // تشفير الصوت
        const formData = new FormData();
        // تأكد من تعيين الاسم والامتداد
        if (selectedFile) {
          formData.append("file", selectedFile);
        } else {
          const encodedBlob = await encodeAudio(recordedBlob.blob);
          formData.append("file", encodedBlob, "recording.wav");
        }

        // const { data } = await axios.post('/api/predict', formData); // استخدم المسار المبدأي '/api'
        let { data } = await axios.post(
          `https://speech-emotions-874.onrender.com/emotions/enter-record`,
          formData,
          {
            headers: {
              token: `${localStorage.getItem("Token")}`,
            },
          }
        );
        if (data.message == "success") {
          localStorage.setItem("emotion", data.emotion)
          navigate("/homepage/Result")
          setLoading(false);
        }
      } catch (error) {
        console.error('Error uploading the file:', error);
        setLoading(false);
      }
    } else {
      setMessage('No Recorded Media Available');
      setLoading(false);
    }
  };

  return (
    <div className='parent-record d-flex flex-column align-items-center justify-content-around'>
      <h4 className='sub-title'>Click the button to start recording or import an audio</h4>

      <ToastContainer />
      <div className='d-flex align-items-center justify-content-center'>
        {/* <img src={imgFile} className='record-mic' onClick={startRecording}></img> */}
        <button
          onClick={startRecording}
          className="btn border-0 record-mic"
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
        <label htmlFor="fileInput" style={{ cursor: "pointer", textAlign: "center" }}>
          <img src={imgRecord} style={{ width: "105px", height: "105px" }} />
          <input
            type="file"
            id="fileInput"
            className='selectedAudio'
            accept="audio/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div className='sub-title'>
        {
          selectedFile?.name
        }
      </div>
      <div className='sub-title'>
        {
          selectedFile?.name || path ? "":message
        }
      </div>
      <div className='parentLottie d-flex align-items-center justify-content-center'>
        <div onClick={stopRecording} className='record'>
          {record ? <Lottie animationData={stop} className='lottieStop ' /> : ""}
        </div>
        <div>

          {record ? <Lottie animationData={sound} className='lottieSound' /> : ""}
        </div>
        <ReactMic
          record={record}
          className="sound-wave d-none"
          onStop={onStop}
          onData={onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />

      </div>
      <button onClick={sendRecord} className="btn-f-page btn-record"> {loading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        "Show Result"
      )}</button>
    </div>
  );
};

export default AudioRecorder;
