import React from 'react'
import Cart from './Cart'

const MyCart = (cartItem) => {
  return (
   <>
   <div className="main-cart">
<div className="cart-product-list">

 {cartItem.map((item)=> <Cart item={item}/>)}
</div>

<div className="cartBill">
    <h1>Price-datils</h1>
    <div className="billBox">
        <li><p>price {cartItem.length} items</p><p>{s1}</p></li>
        <li><p>Discount</p> <p>100</p></li>
        <li><p>Delivery Charge</p><p><del>40</del></p>Free</li>
        <li><p>Total Amount</p> <p>{s1-100}</p></li>
    </div>
</div>

   </div>




   
   </>
  )
}

export default MyCart
