import React, { useState } from 'react'


import { BsTypeH3 } from 'react-icons/bs'

const Toggle = ({item}) => {


    const [to,setTo]=useState(false)

    function  to_fun(){
        setTo(!to)
    }
  return (
<>


<div className="main-toggle" style={{ border:"1px solid red",width:"255px"}}>
 
    <div style={{display:"flex", justifyContent:"space-between", paddingInline:" 8px", alignItems:"center",height:"40px",width:"250px",paddingBlock:"5px"}}>
        <h1 style={{fontSize:"1.3rem" , color:"black"}}>{item.q}</h1>
        <button onClick={to_fun} style={{fontSize:"1.3rem" , color:"black", border:"none"}}>{to? "-":"+"}</button>
    </div>
    <div>    {""}
    {to && <h3 style={{fontSize:"1.1rem" , color:"rgb(59, 61, 61)",padding:"5px 8px "}} >{item.a}</h3>}
    {""}</div>

    </div>
    </>
  )
}
export default Toggle
