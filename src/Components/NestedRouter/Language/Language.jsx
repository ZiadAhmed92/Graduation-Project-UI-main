import React, { useState } from "react";
import QRCodeCanvas  from "qrcode.react";
import { AiFillCopy, AiOutlineDownload } from "react-icons/ai";
import html2canvas from "html2canvas";

export default function Language() {
  const [qr, setqr] = useState("");

  const QrCodeDownload = async () => {
    const canvas = await (
      await html2canvas(document.getElementById("canvas"))
    ).toDataURL();

    if (canvas) {
      setqr(canvas);
      const a = document.createElement("a");
      a.download = "QrCode.png";
      a.href = canvas;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  const QrCodeCopy = () => {
    navigator.clipboard.writeText(qr);
    window.alert("Copied to clipboard !")
  };



  const url = `http://localhost:5173/${localStorage.getItem("Token")}/${localStorage.getItem("UserId")}`

  return (
    <div>
      {/* <h2>Scan this QR Code to visit History</h2>
        <QRCode
          value="https://www.example.com"
          ref={qrCodeRef}
          size={128}
          style={{ padding: "20px" }}
        />
      <button onClick={downloadQRCode}>Download QR Code</button> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
          <h2 className="text-center" style={{color:"var(--text)"}}>Scan this QR Code to visit History</h2>
            <div id="canvas" className=" relative" style={{ textAlign: "center", marginTop: "50px" }}>
        <QRCodeCanvas
          value={url}
          size={400}
          level={"H"}
          includeMargin={true}
        />
      </div>    
          </div>   
          <div className="col-md-6">
          <div className="  mt-4 p-4 space-x-2 ">
        <button
          onClick={() => QrCodeDownload()}
          className="d-flex downloadQR align-items-center justify-content-center  border-0 py-2 px-4  w-100 "
        >
          <AiOutlineDownload />
          Download
        </button>
<br />
        <button
          onClick={() => QrCodeCopy()}
          className="d-flex downloadQR align-items-center justify-content-center  border-0 py-2 px-4  w-100 "
        >
          <AiFillCopy />
          Copy
        </button>
      </div></div>           
        </div>
      </div>
    </div>
  );
}
