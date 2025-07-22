import React, { useState } from 'react'
import "./Forget.css"
import {Link} from 'react-router-dom'
export default function Forget() {
const [Email,setEmail]=useState("")
const [msg,setMsg]=useState("")

  const handleForget=()=>{
    

  }
  return (
    <>
    <div className="main-forget-container">
    <div className="container">
  <div className="form">
    <h1>Sign In</h1>
<h3>Email Address <sup>*</sup></h3>
    <input type="email" placeholder='Email' />
    <button> Forget Password </button>
    <button ><Link to='/login'>Back</Link></button></div>
  </div>
  </div>
    </>
  )
}

