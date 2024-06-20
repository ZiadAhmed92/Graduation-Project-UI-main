import axios from 'axios';
import Lottie from 'lottie-react';
// eslint-disable-next-line no-unused-vars
import React, { useLayoutEffect } from 'react';
import loading from "../../../image/new loading.json";
import { Link, Outlet } from 'react-router-dom';
import { YearProvider, useYear } from '../../Context/YearContext';

const Month = () => {
  const { year, setYear } = useYear();

  async function getHistoryForYear() {
    let { data } = await axios.get(
      `https://speech-emotions-874.onrender.com/emotions/history/year/${localStorage.getItem("UserId")}`,
      {
        headers: {
          token: `${localStorage.getItem("Token")}`,
        },
      }
    );  
    setYear(data);
  }

  useLayoutEffect(() => {
    getHistoryForYear();
  }, []);

  if (!year.Year["January 2024"]) {
    return (
      <div className='col-md-12 d-flex align-items-center justify-content-center'>
        <div>
          <Lottie animationData={loading} />
        </div>
      </div>
    );
  }

  return (
    <div className='w-100 mt-5'>
      <div className='text-center'>
        <Link to="/homepage/history"><button style={{background:" rgb(243, 223, 227)",color:"black"}} className='btn px-3 mx-2' >Day</button></Link>
        <Link to="/homepage/history/week"><button style={{background:" rgb(243, 223, 227)",color:"black"}} className='btn px-3 mx-2'>Week</button></Link>
        <Link to="/homepage/history/month"><button  style={{background:" rgb(243, 223, 227)",color:"black"}} className='btn px-3 mx-2'>Month</button></Link>
        <Link to=""><button style={{background:" #F85899",color:"white"}}  className='btn px-3 mx-2'>Year</button></Link>
      </div>
      <Outlet />
    </div>
  );
};

const WrappedMonth = () => (
  <YearProvider>
    <Month />
  </YearProvider>
);

export default WrappedMonth;
