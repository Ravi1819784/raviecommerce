import React, { useContext, useEffect } from "react";
import { productContext } from "../App";
import "./AddToCart.css";
import { useNavigate } from "react-router-dom";
const AddToCart = () => {


  const navigate = useNavigate()
  const handleBuy=()=>{
    navigate("/buy")
  }
  const { cartProduct, setCartProduct } = useContext(productContext);

  const allPrice = cartProduct.map(
    (product) => parseInt(product.Count) * parseInt(product.Price)
  );

  const totalPrice = allPrice.reduce(
    (acc, curr) => parseInt(acc) + parseInt(curr),
    0
  );

  const totalDiscount = cartProduct.reduce(
    (acc, product) => parseInt(acc) + parseInt(product.Count * 99),
    0
  );

    const totalItems = cartProduct.reduce(
    (acc, product) => parseInt(acc) + parseInt(product.Count),
    0
  );


  const handlIncrement = (id) => {
    const increasingCount = cartProduct?.map((product) =>
      product.Id == id ? { ...product, Count: product.Count + 1 } : product
    );

    setCartProduct(increasingCount);
  };
  const handleDecrement = (id) => {
    const decreasingCount = cartProduct.map((product) =>
      product?.Id == id
        ? { ...product, Count: product.Count > 1 ? product.Count - 1 : 1 }
        : product
    );

    setCartProduct(decreasingCount);
  };

  const handleRemoveProduct = (id) => {
    const notRemovedData = cartProduct?.filter((product) => product?.Id != id);
    setCartProduct(notRemovedData);
  };

  // local storage

     useEffect(()=>{

    const cartDataSave=JSON.parse(localStorage.getItem("cartData"));
  
    if(cartDataSave && Array.isArray(cartDataSave)){
      setCartProduct(cartDataSave);
    }
    console.log("hello",cartDataSave)

  },[])


  useEffect(()=>{
if(cartProduct.length>0){
  localStorage.setItem("cartData",JSON.stringify(cartProduct))
       console.log("hii",cartProduct)
}
 
  },[cartProduct])

  return (
    <>
      <div className="main-addtocart">
        <div className="AddToCart">
          {" "}
          {cartProduct.map((product) => (
            <div className="left-addtocart">
              <div className="left-addtocartlist">
                <div className="imageaddtocart">
                  <div className="leftimageaddtocard">
                    <img src={product.Image[0]} alt="" />
                  </div>
                  <div className="addproduct">
                    <p
                      className="minus"
                      onClick={() => handleDecrement(product.Id)}
                    >
                      -
                    </p>
                    <p className="number">{product.Count}</p>
                    <p
                      className="minus"
                      onClick={() => handlIncrement(product.Id)}
                    >
                      +
                    </p>
                  </div>
                </div>
                <div className="product-details">
                  <h4>{product.Heading}</h4>
                  <h5>{product?.Name}</h5>
                  <h5>{product?.Brand}</h5>
                  <p>₹{product?.Price}</p>
                  <p >{product?.Category}</p>
                  <h2
                    className="remove"
                    onClick={() => handleRemoveProduct(product?.Id)}
                  >
                    REMOVE
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="right-addtocart">
          <div className="right-addtocart-main">
            <div className="right-price-details">Price Detail's <span style={{color:"green"}}>({totalItems})</span> </div>
            <div className="right-pricing">
              <h3>Price</h3>
              <h3>₹ {totalPrice}</h3>
              <div className="discount">
                {" "}
                <h2 className="dis">Discount : <span style={{color:"green"}}>save  ₹ 99 per product </span> <span><span> (₹ {totalDiscount})</span></span> </h2>
                {/* <h2>₹ - {parseInt(totalPrice * (0.1))}</h2> */}
      
              </div>
            </div>

            <div className="right-total-amount">
              <div className="amount">
                <p>Total Amount : </p>
                {/* <p>₹ {parseInt(totalPrice * (0.9))}</p> */}
                <p>
                  ₹ {totalPrice-totalDiscount}
                </p>
              </div>
            </div>
            <div className="right-discount-show">
              {/* <h2>You will save ₹ {parseInt(totalPrice * (0.1))} rupees on this order</h2> */}

              <h2>You will save ₹ {totalDiscount} rupees on this order</h2>
                 <center><button className="buyNow" onClick={handleBuy}>Buy Now</button></center> 
            </div>
           
          </div>
             
        </div>
     
      </div>
    </>
  );
};

export default AddToCart;
