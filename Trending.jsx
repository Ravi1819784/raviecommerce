import React, { useState } from "react";
import { products } from "./data.jsx";
import "./Trending.css";
import { Link } from "react-router-dom";
const Trending = () => {

    const [imageChange, setImageChange] = useState("");
    const [imageIndex, setImageIndex] = useState("");
  
    const handleOnMouseEnter = (img, ind) => {
      setImageChange(img);
      setImageIndex(ind);
    };
  
    const handleOnMouseLeave = (img) =>{
      setImageChange(img);
    }

  const trendingProducts = products.filter(
    (product) => product.Trending == true
  );

  return (
    <>
      <h2 className="trend-heading">Trending Product's</h2>

      <div className="main-container">
       <div className="trending-container">
         
      {trendingProducts.map((product)=> <Link to={`/single-product/${product.Id}`}
                        style={{ textDecoration: "none" }}>
              <div className="trending">
                <img
                
                   src={
                    imageChange != "" && imageIndex == ind
                      ? imageChange
                      : product?.Image[0]
                  }
                  alt=""
                  className="trending-img"

                  onMouseEnter={() =>
                    handleOnMouseEnter(product.Image[1], ind)
                  }
                  onMouseLeave={()=>handleOnMouseLeave(product.Image[0])}
                />
                <div className="text">
                  <div className="heading">{product.Heading}</div>
                  <div className="trending-price">
                    <p className="des-price">₹{product.Price+100}</p>
                    <p style={{color:"green"}}>₹{product.Price}</p>
                  </div>
                </div>
              </div>
          
         </Link>
)}
       
        </div>
       
      </div>
    </>
  );
};

export default Trending;
