// import React, { useState } from 'react'
// import "./Admin.css"

// const Admin = ({click}) => {

// const [sp,setSp]=useState("")
// const [name,setName]=useState("")
// const [price,setPrice]=useState("")
// const [buy,setBuy]=useState("")
// const [pic,setPic]=useState(null)
//   return (
// <>

// <div className="admin-main">
  
//   {sp}

// <select name="" id="" onChange={(e)=>setOp(e.target.value)}>
  
//   <option value="select">Select</option>
//   <option value="Vendor">Vendor</option>
//   <option value="Home">Home</option>
// <option value="Section">Section</option>

// </select>


// <select name="" id="" onChange={(e)=>setSp(e.target.value)}>
//   <option value="Select">Select</option>
//   <option value="Home">Home</option>
// </select>



// <input type="text" placeholder='product-name' onChange={(e)=>setName(e.target.value)} />
// <input type="text" placeholder='product-price' onChange={(e)=>setPrice(e.target.value)}/>
// <input type="text" placeholder='product-buy' onChange={(e)=>setBuy(e.target.value)}/>
// <input type="file" accept='image/*' placeholder='product-image' onChange={(e)=>setPic(e.target.files[0])}

// />
// <button onClick={()=>click(name,price,buy,pic)}>Add</button></div>

// </>
//   )
// }

// export default Admin



import React from 'react'
import { useState } from 'react'
import "./Admin.css"

const Admin = ({click}) => {
const [name,setName]=useState("")
const [price,setPrice]=useState("")
const [pi,setPi]=useState(null)

  return (
   <>
   <div className="admin-main">



   <input type="text" placeholder='name' onChange={(e)=>{setName(e.target.value)}}/>
      

      
   <input type="text" placeholder='Price' onChange={(e)=>{setPrice(e.target.value)}}/>
   <input type="file" accept='image/*'  onChange={(e)=>{setPi(e.target.files[0])}}/>
   <button onClick={()=>{click(name,price,pi)}}>submit</button>
   </div>
   </>
  )
}

export default Admin
