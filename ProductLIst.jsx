import React, { useState } from 'react'
import "./ProductLIst.css"
import { MdStarRate } from "react-icons/md";
import { Link } from 'react-router-dom';
const ProductLIst = ({ProductItem,title}) => {

    const [imageChange, setImageChange] = useState("");
    const [imageIndex, setImageIndex] = useState("");
  
    const handleOnMouseEnter = (img, ind) => {
      setImageChange(img);
      setImageIndex(ind);
    };
  
    const handleOnMouseLeave = (img) =>{
      setImageChange(img);
    }


  return (
    <>
    <h2 className="trend-category">{title}</h2>
    <div className="main-container">
   
      <div className="categorys">
 

       {ProductItem.map((product,ind)=>{return (ind <10 && (<div className="product-card" >
              <Link  to={`/single-product/${product.Id}`}
                        style={{ textDecoration: "none" }} >
              <img
                src={
                  imageChange != "" && imageIndex == ind
                    ? imageChange
                    : product?.Image[0]
                }
                alt=""
                onMouseEnter={() =>
                  handleOnMouseEnter(product.Image[1], ind)
                }
                onMouseLeave={()=>handleOnMouseLeave(product.Image[0])}
        className='productImages'
              />

              <div className="category-name">
                <p className='head'>{product.Heading}</p>
           <div className="price">
            <p style={{textDecorationLine: 'line-through',color:"brown"}}><del>₹{product.Price +100}</del></p>
            <p style={{color:"green"}}>₹{product.Price}</p>
           </div>
           <div className="rating-list">
           <MdStarRate />
           <MdStarRate />
           <MdStarRate />
           <MdStarRate />
           <MdStarRate />
           </div>
              </div>
                 </Link>
            </div>))})}
     
 
      </div>
    </div>
    </>
  )
}

export default ProductLIst
