import React, { useState } from 'react'

import "./Card.css"
const Card = ({todo, productJson, title }) => {


  const [imageChange, setImageChange] = useState("")
  const [imageIndex, setImageIndex] = useState("");

  const handleOnMouseEnter = (img, ind) => {
    setImageChange(img);
    setImageIndex(ind);
  };

  const handleOnMouseLeave = (img) => {
    setImageChange(img);
  };

  return (
    <div>
      
<center>
    <h1 className='shop'>{title}</h1>
    </center>


<div className="main-container">

</div>

<div className="main-container">

    <div className="main-card">

{productJson?.map((product,ind)=>{
  return(
    <div className="card">
    <img   src={ imageChange != "" && imageIndex == ind
  ? imageChange
    : product.Image[0]
  } alt="" 
  
  onMouseEnter={() =>
    handleOnMouseEnter(product.Image[1], ind)
  }
  onMouseLeave={() => handleOnMouseLeave(product.Image[0])}/>
    <div className="product"><h3 className='product-name'>{product.Name}</h3></div>
    <div className="price"><h4> ₹{product.Price}</h4>
    {/* <button className='btn'>BUY</button> */}
    </div></div>

  )
})}



        </div>
        
    </div>

<div className="main-container">
<div className="main-card">
  {todo.map((item)=><><div className="card">
<img src={item.imgg} alt="" />
<div className="product"><h3 className='product-name'>{item.name}</h3></div>
<div className="price"><h4>{item.price}</h4>
<button className='btn'>BUY</button></div></div></>)}

</div>
</div>

</div>







   
  )
}

export default Card
