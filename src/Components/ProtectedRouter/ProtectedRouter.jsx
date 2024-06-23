import React from 'react'
import Login from '../Auth/Login.jsx'

const ProtectedRouter = ({ children}) => {
 if(!localStorage.getItem("Token")){
    return <Login />
 }else{
  return children
 }
}

export default ProtectedRouter