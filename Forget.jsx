import React from 'react'
import "./Forget.css"
import {Link} from 'react-router-dom'
export default function Forget() {
  return (
    <>
    <div className="main-forget-container">
    <div className="container">
  <div className="form">
    <h1>Sign In</h1>
<h3>Email Address <sup>*</sup></h3>
    <input type="email" placeholder='Email' />
    <button> <Link to='/forgetpassword'>Forget Password</Link></button>
    <button ><Link to='/login'>Back</Link></button></div>
  </div>
  </div>
    </>
  )
}

