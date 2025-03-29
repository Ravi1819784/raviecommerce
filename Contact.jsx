import React, { useEffect, useState } from 'react'

import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./Contact.css"

const Contact = () => {

const[name,setName]=useState("")
const[email,setEmail]=useState("")
const[message,setMessage]=useState("")

const [data,setData]=useState([])
function click(){

  const result=[...data,{name,email,message}]
  setData(result)
  localStorage.setItem("rt",JSON.stringify(result))

  alert("form submit successfully")

}


useEffect(()=>{

  const dt=JSON.parse(localStorage.getItem("rt"))
  if(dt){
    setData(dt)
  }

},[])
  return (
<>

<div className="main">


<div className="left-contact">

<div className="number"> <div className="mobile"><FaSquarePhone className='phone'/> 7828618763</div>
<div className="whtasp"><FaWhatsapp className='wtp'/>  7828618763</div>

<div className="email"><MdOutlineMail className='mail'/>  ravisingh17200@gmail.com</div></div>

<h2 style={{ fontSize:"1.6rem"}}>Follow Us</h2>


<div className="conatctus"><a href="linkedin.com/in/ravi-singh-09a6ba165" target='_blank' rel='noopener noreferrer'><FaLinkedinIn className='linkedin'/> </a> 
<FaGithub  className='github'/></div>



</div>
<div className="form-contact">

<h1 style={{fontSize:"1.6rem", color:"black",marginBlock:"20px"}}>Contact Form</h1>

<form >

<div className="c-1">


  <label htmlFor="FullName">Full Name: </label>
  <br />
<br />
  <input type="text" name='FullName' placeholder='Name' style={{paddingLeft:"8px", outline:"none"  }}  onChange={(e)=>setName(e.target.value)}/>
</div>
<div className="c-1">
<br />

  <label htmlFor="Email">Email: </label>
  <br />
<br />
  <input type="email" name='Email' placeholder='Email'  style={{paddingLeft:"8px" ,outline:"none"}}  onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div className="c-1">

<br />
  <label htmlFor="Message">Message: </label>
  <br />
<br />
  <input type="textarea" name='Message' placeholder='Message'  style={{paddingLeft:"8px", paddingBlock:"40px", outline:"none"}} onChange={(e)=>setMessage(e.target.value)}/>
</div>

<center><button type='submit' style={{marginTop:"20px", padding:"5px 12px", backgroundColor:"rgb(11, 111, 241)",color:"white",border:"none",borderRadius:"6px"}} onClick={click}>Submit</button></center>


</form>

</div>

</div>


</>


  )
}

export default Contact
