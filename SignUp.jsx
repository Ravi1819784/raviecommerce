import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import "./SignUp.css"
const SignUp = () => {

  


  // import React, { useState } from 'react'
  // import { useNavigate } from 'react-router-dom'
  
  // export const SignUp = () => {
  
  //  const[name,setName]=useState("")
  //  const[email,setEmail]=useState("")
  //  const[password,setPassword]=useState("")
  
  
  
  // const navigate =useNavigate()
  
  
  
   
  
  //  const collectData= async()=>{ console.warn(name,email,password)
  //  let result= await fetch("http://localhost:5000/register" ,{
  //  method:"post",
  //  body:JSON.stringify({name,email,password}),
  //  headers:{"content-type":"application/json"}
   
  //  })
  //  result = await result.json()
  //  console.log(result);
  //  localStorage.setItem("user", JSON.stringify(result))
  //  navigate("/")
  

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
 
//  const express = require
 
 const navigate=useNavigate();
 
 
 
  
 
  const collectData= async()=>{ console.warn(name,email,password)
  let result= await fetch("http://localhost:5000/register" ,{
  method:"post",
  body:JSON.stringify({name,email,password}),
  headers:{"content-type":"application/json"}
  
  })
  result = await result.json()
  console.log(result);
  localStorage.setItem("user", JSON.stringify(result))
  navigate("/")
   }
  
  //  return (
  //  <>
   
  //  <div className="sign-main">
  // <div className="sign-center">
   
  // <center><h1>Sign up</h1></center>
  // <div className='inp1'>Name: <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/></div>
  
  // <div className="inp1"> Email: <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/></div>
  
  // <div className="inp1">Password: <input id='pw' type="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/></div>
  // <button onClick={collectData}>sign up</button>
  
  // </div>
  // </div>
   
   
   
   
  //  </>
  //  )
  // }
  // export default SignUp













 
  return (
<>
<div className="main-signup-container">
 <div className="container">
  <div className="form">
    <h2>Sign Up</h2>
    <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
    <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
    {/* <input type="number" placeholder='Mobile Number' /> */}
    <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
    <div className="btn">
    <button> <Link to='/login'>Log In</Link></button>
    <button onClick={collectData}><Link to='/signup'>Sign Up</Link></button></div>
    <p><Link to='/login'>You are a member ? <span>Login</span></Link></p>
  </div>
</div> 
</div>
{/* -------------------------------------------------------------------------------- */}

</>
  )
}


export default SignUp 




// -------------------------------------------------------------

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// export const SignUp = () => {

//  const[name,setName]=useState("")
//  const[email,setEmail]=useState("")
//  const[password,setPassword]=useState("")



// const navigate =useNavigate()



 

//  const collectData= async()=>{ console.warn(name,email,password)
//  let result= await fetch("http://localhost:5000/register" ,{
//  method:"post",
//  body:JSON.stringify({name,email,password}),
//  headers:{"content-type":"application/json"}
 
//  })
//  result = await result.json()
//  console.log(result);
//  localStorage.setItem("user", JSON.stringify(result))
//  navigate("/")

//  }

//  return (
//  <>
 
//  <div className="sign-main">
// <div className="sign-center">
 
// <center><h1>Sign up</h1></center>
// <div className='inp1'>Name: <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/></div>

// <div className="inp1"> Email: <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/></div>

// <div className="inp1">Password: <input id='pw' type="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/></div>
// <button onClick={collectData}>sign up</button>

// </div>
// </div>
 
 
 
 
//  </>
//  )
// }
// export default SignUp