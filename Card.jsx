import React from 'react'

import "./Card.css"
const Card = ({todo}) => {
  return (
    <div>
      
<center>
    <h1 className='shop'>SHOP BY CATEGORY</h1>
    </center>


<div className="main-container">

</div>

<div className="main-container">

    <div className="main-card">

        <div className="card">
<img src="https://m.media-amazon.com/images/I/41-5zK88+vL._SY300_SX300_.jpg" alt="" />
<div className="product"><h3 className='product-name'>Vivo</h3></div>
<div className="price"><h4>Price</h4>
<button className='btn'>BUY</button></div></div>


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
