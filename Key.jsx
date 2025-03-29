import React, { useState } from 'react'

const Key = () => {

const [mykey,setMyKey]=useState("")
const [name,setname]=useState("")
const [ifname,setifname]=useState("")

function  aa(e){
    setMyKey(e.key)

    setname(name+e.key)


    if(e.key=="Enter"){
   
        setifname(name)
    }
      
  
}


  return (
    <div>
      <div className='cc'>
      <input type="text" onKeyDown={aa}/>

{/* {mykey} */}
      <h1>{ifname}</h1>
     </div>

    </div> 
  )
}

export default Key
