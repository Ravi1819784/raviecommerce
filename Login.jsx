// import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { useState } from "react"

const Login = () => {
// const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

const navigate=useNavigate();

const handelLogin= async()=>{
  console.warn(email,password)
  let result= await fetch("http://localhost:5000/login", {
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{ "content-type":"application/json"}
  })
  result=await result.json();
  console.warn(result)
  if(result.name){
      localStorage.setItem("user",JSON.stringify(result))
      navigate("/")


  }else{
      alert("please enter correct details")
        }
    }


  return (
<>
{/* sir code */}
{/* ----------------------------------------------------------------------------------------------------- */}







{/* ---------------------------------------------------------------------------------------------------------- */}
{/* my code */}

{/* ------------------------------------------------------------------------------------------- */}


<div className="main-login-container">
<div className="container">
  <div className="form">
    <div className="text-container">
<h2>Log In</h2>
<div className="underline"></div>
</div>
    {/* <input type="name" placeholder='Name' onChange={(e)=>setName(e.target.value)}/> */}
    <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
    <p><Link to='/forgetPassword'><span>Forget Password ?</span></Link></p>
    <div className="btn">
    <button onClick={handelLogin}>Log In</button>
    <button ><Link to='/signup'>Sign Up</Link></button></div>
    <p><Link to='/signup'>You are not a member ? <span>Sign up</span> </Link></p>
  </div>
</div>
</div>

{/* -------------------------------------------------------------------------------------- */}
</>
  )
}

export default Login
