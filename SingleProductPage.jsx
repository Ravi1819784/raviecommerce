import React, { useContext, useEffect, useState } from "react";
import "./SingleProductPage.css";
import { Link, useParams } from "react-router-dom";
import { products } from "./data";
import { productContext } from "../App";
const SingleProductPage = () => {
  const { id } = useParams();

  
  const [SingleProduct] = products.filter((SingleItem) => SingleItem.Id == id);

  const {cartProduct,setCartProduct}=useContext(productContext)

  const [isAvailableToCart, setIsAvailableToCart] = useState(false);

  const [productImage, setProductImage] = useState("");

  const handleOnenter = (img) => {
    setProductImage(img);
  };

  const handleOnLeave = (img) => {
    setProductImage(img);
  };

    const handlAddToCart = () => {
      const isAddedToCart = cartProduct?.filter(
        (SingleItem) => SingleItem?.Id == SingleProduct?.Id
      );
  
      if (isAddedToCart.length > 0) {
        alert("Product is added to cart");
        setIsAvailableToCart(true);
        return null;
      }
  
      setCartProduct([...cartProduct, SingleProduct]);
    };
  
    useEffect(() => {
      const isAddedToCart = cartProduct?.filter(
        (SingleItem) => SingleItem?.Id == SingleProduct?.Id
      );
  
      if (isAddedToCart.length > 0) {
        setIsAvailableToCart(true);
      }
  
      if (isAddedToCart.length == 0) {
        setIsAvailableToCart(false);
      }
    }, [cartProduct, SingleProduct]);


  return (
    <>
      <div className="main-cart">
        <div className="left-cart">
          <div className="left-cart-image">
            {" "}
            <div className="left-multi-image">
              {" "}
              {SingleProduct.Image.map((image) => (
                <>
                  {" "}
                  <div className="image-list">
                    <img
                      src={image}
                      alt=""
                      onMouseEnter={() => handleOnenter(image)}
                      onMouseLeave={() => handleOnLeave(productImage)}
                    />
                    {/* <img src="./src/assets/fashion/BlackJacket-1.webp" alt="" />
              <img src="./src/assets/fashion/BlackJacket-1.webp" alt="" />
              <img src="./src/assets/fashion/BlackJacket-1.webp" alt="" /> */}
                  </div>
                </>
              ))}
            </div>
            <div className="left-cart-main-image">
              <img
                src={productImage == "" ? SingleProduct.Image[0] : productImage}
                alt={"img"}
              />
            </div>
          </div>
        </div>

        <div className="right-cart">
          <div className="right-cart-text">
            <h3 className="heading-rights">
              {SingleProduct.Heading}
            </h3>
            <div className="cart-text">
              <b>
                <h3 className="cart-text-heading">Model</h3>
              </b>

              <p>{SingleProduct.Name}</p>
            </div>

            <div className="cart-text">
              {" "}
              <b>
                <h3 className="cart-text-heading">Brand</h3>
              </b>
              <p>{SingleProduct.Brand}</p>
            </div>

            <div className="cart-text">
              {" "}
              <b>
                <h3 className="cart-text-heading">Price</h3>
              </b>
              <p>₹ {SingleProduct.Price}</p>
            </div>
            <div className="cart-text">
              {" "}
              <b>
                <h3 className="cart-text-heading">Rating</h3>
              </b>
              <p>Rating</p>
            </div>
            <p className="description">{SingleProduct.Description } </p>

            <div className="cart-btn">
              {/* <button className="gotocart">
                              GoToCart
                            </button> */}
                            {isAvailableToCart ? (<Link to="/cart"> { <button className="gotocart">
                              GoToCart
                            </button> }</Link>) :(<button className="addtocart" onClick={handlAddToCart}>AddToCart</button>)}


        

              <button className="buynow">Buy Now</button>
              {/* <button className="addtocart">AddToCart</button>
              <button className="buynow">Buy Now</button> */}
            </div>
          </div>
        </div>
        <div className="message">
          {/*           
         "You will also like these product's" */}
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
