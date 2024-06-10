import React, { useState } from 'react'
import email from "../../Animation/email.json";
import Lottie from "lottie-react";
import "./ResetSendEmail.css"
import { Link } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import Swal from 'sweetalert2';

const ResetSendEmail = () => {
  // const [state, setState] = useState({
  //   open: false,
  //   vertical: 'top',
  //   horizontal: 'center',
  // });
  // const { vertical, horizontal, open } = state;

  // const handleClick = (newState) => () => {
  //   setState({ ...newState, open: true });
  // };

  // const handleClose = () => {
  //   setState({ ...state, open: false });
  // };
  const Message = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 2000
    })
  }

  return (
    <div className='parent-resend-email'>
      <div>
        <h1 className='sub-title sub-title-forget'>Email has been sent</h1>
        <h3 className='text-forget-pass text-capitalize fontfamily'>Please Check Your Inbox and Click In Link To Confirm Your Account </h3>
      </div>
      <div className='w-100'>
        <div>
          <Lottie className="email-resend" animationData={email} />
        </div>
      </div>
      <div className='w-100 text-center '>
        <Link to="/login"><button className='btn-resend-email fontfamily'>Login</button></Link>
        <h6 className='text-resend-email py-2 fontfamily'>You didn't get the link ?
          <span style={{ color: "#F85899", cursor: "pointer" }} onClick={Message}>
            resend
            {/* <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message={
                <span style={{ color: "var(--text)" }}>
                  The Message Has Been Resent .
                </span>
              }
              key={vertical + horizontal}
            /> */}

          </span>
        </h6>
      </div>

    </div>
  )
}

export default ResetSendEmail