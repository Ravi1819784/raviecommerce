// import React, { useContext, useEffect, useState } from "react";
// import { MdStarRate } from "react-icons/md";
// import { products } from './data';
// import ProductLIst from '../Components/ProductLIst'
// import { NavLink, useParams } from "react-router-dom";
// import "./SingleProduct.css";
// // import { productContext } from "./App";
// // import { productContext } from "./App";

// const SingleProduct = () => {
  
//   const [productImage, setProductImage] = useState("");
//   // const { cartProduct, setCartProduct } = useContext(productContext);
//   const [isAvailableToCart, setIsAvailableToCart] = useState(false);

//   const { id } = useParams();

//   const [singleData] = products.filter((product) => product.Id === id);

//   const suggestedProduct = products?.filter(
//     (sugProduct) =>
//       sugProduct?.Category?.toLowerCase() == singleData?.Category?.toLowerCase()
//   );

//   const handleEnterChangeImage = (img) => {
//     setProductImage(img);
//   };

//   const handleLeaveChangeImage = (img) => {
//     setProductImage(img);
//   };

//   const handlAddToCart = () => {
//     const isAddedToCart = cartProduct?.filter(
//       (product) => product?.Id == singleData?.Id
//     );

//     if (isAddedToCart.length > 0) {
//       alert("Product is added to cart");
//       setIsAvailableToCart(true);
//       return null;
//     }

//     setCartProduct([...cartProduct, singleData]);
//   };

//   useEffect(() => {
//     const isAddedToCart = cartProduct?.filter(
//       (product) => product?.Id == singleData?.Id
//     );

//     if (isAddedToCart.length > 0) {
//       setIsAvailableToCart(true);
//     }

//     if (isAddedToCart.length == 0) {
//       setIsAvailableToCart(false);
//     }
//   }, []);

//   return (
//     <>
//       <div className="main-cart">
//         {
//           singleData.Image.map((image,ind)=>{
//             return (
//               <div className="left-cart"       key={ind}>
           
//                 <div className="left-cart-image">
//                   {" "}
//                   <div className="image-list">
//                     <img src={image}
//                     alt={`image${ind}`}    onMouseEnter={() => handleEnterChangeImage(image)}
//                     onMouseLeave={() =>
//                       handleLeaveChangeImage(productImage)
//                     } />
//                     {/* <img src="" alt="" />
//                     <img src="" alt="" />
//                     <img src="" alt="" /> */}
//                   </div>
//                   <div className="left-cart-main-image">
//                     <img src={productImage == "" ? singleData?.Image[0] : productImage}
//                   alt={"img"}/>
//                   </div>
//                 </div>
//               </div>
//               );
//           })
//         }

//         <div className="right-cart">
//           <div className="right-cart-text">
//             <h2>{singleData?.Heading}</h2>
//             <div className="cart-text"><b>
//               <h3>Model</h3>
//             </b>
    
//               <p>{singleData?.Name}</p></div>
       
            
//               <div className="cart-text">     <b>
//               <h3>Brand</h3>
//             </b>
    
//               <p>{singleData?.Brand}</p></div>
          
//               <div className="cart-text">     <b>
//               <h3>Price</h3>
//             </b>
    
//               <p>₹ {singleData?.Price}</p></div>
//               <div className="cart-text">     <b>
//               <h3>Rating</h3>
//             </b>
    
//               <p>{singleData?.Rating}</p></div>
//             <p>
//             {singleData?.Description}
//             </p>
//             <div className="cart-btn">
//                   {isAvailableToCart ? (
//                               <NavLink
//                                 to={"/addtocart"}
//                                 className="gotocart"
//                               >
//                                 GoToCart
//                               </NavLink>
//                             ):(
//                               <button
//                                 className="addtocart"
//                                 onClick={handlAddToCart}
//                               >
//                                 AddToCart
//                               </button>
//                             )}
//                             <button className="buynow">
//                               Buy Now
//                             </button>
//                {/* <button className="addtocart">AddToCart</button>
//               <button className="buynow">Buy Now</button> */}
//             </div>
//           </div>
//         </div>
//         <div className="message">
//           <ProductLIst
//             title={"You will also like these product's"}
//             productJson={suggestedProduct}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SingleProduct;
