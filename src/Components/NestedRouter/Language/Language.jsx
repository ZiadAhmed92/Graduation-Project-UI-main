import React, { useEffect, useState } from "react";
import QRCodeCanvas from "qrcode.react";
import { AiFillCopy, AiOutlineDownload } from "react-icons/ai";
import html2canvas from "html2canvas";
const url = `http://localhost:5173/${localStorage.getItem("Token")}/${localStorage.getItem("UserId")}`
function Language() {
  // const [cameraPermission, setCameraPermission] = useState(false);
  const [qr, setqr] = useState("");
  const [message, setMesssage] = useState("");

  // useEffect(() => {
  //   navigator.mediaDevices.getUserMedia({ video: true })
  //     .then((stream) => {
  //       setCameraPermission(true);
  //     })
  //     .catch((error) => {
  //       console.error('Error accessing camera:', error);
  //     });
  // }, []);

  // const handleScan = (result) => {
  //   if (result) {
  //     setQRCode(result.text);
  //   }
  // };




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
      setMesssage("Download Successfully")
    }
  };
  const QrCodeCopy = () => {
    setMesssage("Copy Successfully")
    navigator.clipboard.writeText(qr);
    window.alert("Copied to clipboard !")


  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Title",
        url: url,
      })
        .then(() => setMesssage('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      setMesssage('Native share not supported');
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 ">
            <h2 className="text-center fontFamily" style={{ color: "var(--text)" }}>Scan this QR Code to visit History</h2>
            <div id="canvas" className=" relative" style={{ textAlign: "center", marginTop: "50px" }}>
              <QRCodeCanvas
                value={url}
                size={300}
                level={"H"}
                includeMargin={true}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center text-capitalize fw-bold"style={{color:"var(--text)"}}>{message}</div>
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
              <br />
              <button
                onClick={handleShare}
                className="d-flex downloadQR align-items-center justify-content-center  border-0 py-2 px-4  w-100 "
              >
                <i className="fa-solid fa-qrcode mx-2"></i>
              Share
              </button>
              {/* <br />
              <div>
                {cameraPermission ? (
                  <QRCodeScanner
                    onScan={handleScan}
                    onError={(error) => console.error('Error scanning QR code:', error)}
                  />
                ) : (
                  <button onClick={() => navigator.mediaDevices.getUserMedia({ video: true })}>
                    Open Camera
                  </button>
                )}
                {qr && (
                  <p>Scanned QR code: {qrCode}</p>
                )}
              </div> */}
            </div></div>
        </div>
      </div>
    </div>

  );
}

export default Language;
