import React, { useState } from "react";
import { products } from "./data.jsx";
import "./Category.css";
const Category = () => {
  const [imageChange, setImageChange] = useState("");
  const [imageIndex, setImageIndex] = useState("");

  const handleOnMouseEnter = (img, ind) => {
    setImageChange(img);
    setImageIndex(ind);
  };

  const handleOnMouseLeave = (img) => {
    setImageChange(img);
  };

  const uniqueCategory = [
    ...new Set(products?.map((product) => product?.Category)),
  ];

  const uniqueProudct = uniqueCategory?.map((category) => {
    return products?.filter((product) => product?.Category == category)[0];
  });

  return (
    <>
      <h2 className="trend-category">Product Category</h2>
      <div className="main-container">
        <div className="category">
          {uniqueProudct.map((product, ind) => {
            return (
              <div className="category-card" key={ind}>
                <img
                  src={
                    imageChange != "" && imageIndex == ind
                      ? imageChange
                      : product?.Image[0]
                  }
                  alt="product"
                  onMouseEnter={() => handleOnMouseEnter(product.Image[1], ind)}
                  onMouseLeave={() => handleOnMouseLeave(product.Image[0])}
                />

                <div className="category-name">
                  <h5 className="cat">{product?.Category}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
