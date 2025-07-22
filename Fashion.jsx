
import { MdStarRate } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Fashion.css"
import { products } from './data';
const Fashion = () => {
 const [filterProduct, setFilterProduct] = useState([]);
  const [filterPrice, setFilterPrice] = useState("All");
  const [listProduct, setListProduct] = useState([]);
      const fashionProduct = products?.filter(
        (product) => product?.Type == "Fashion" && product
      );

        const handleProductFilterChange = (e) => {
          const { checked, value } = e.target;
      
          if (checked) {
            setFilterProduct([...filterProduct, value]);
          }
      
          if (!checked) {
            const filtering = filterProduct?.filter((prod) => prod != value);
            setFilterProduct(filtering);
          }
        };
      
        const handlePriceFilterChange = (e) => {
          const { checked, value } = e.target;
      
          if (checked && value == "All") {
            setFilterPrice("All");
          }
      
          if (checked && value != "All") {
            setFilterPrice(value);
          }
        };
      
        const [min, max] = filterPrice.split("-");
      
        useEffect(() => {
          const filteredProduct =  fashionProduct?.filter((product) => {
            if (filterProduct?.length == 0) {
              return product;
            }
      
            if (filterProduct?.length > 0) {
              return filterProduct?.includes(product?.Category) && product;
            }
          });
      
          if (filterProduct?.length == 0) {
            const filterByOnlyPrice =  fashionProduct?.filter((product) => {
              if (filterPrice == "All") {
                return product;
              }
      
              if (filterPrice != "All") {
                return product?.Price > min && product?.Price < max && product;
              }
            });
      
            setListProduct(filterByOnlyPrice);
          }
      
          if (filterProduct.length > 0) {
            const filterByPriceWithProduct = filteredProduct?.filter((product) => {
              if (filterPrice == "All") {
                return product;
              }
      
              if (filterPrice != "All") {
                return product?.Price > min && product?.Price < max && product;
              }
            });
            setListProduct(filterByPriceWithProduct);
          }
        }, [filterProduct, filterPrice]);
  return (
   <>
   <div className="main-gadget" >

    <div className="gadget">

      <div className="filter-gadget-item">
<div className="product-filter">

  <div className="filter">

    <h3 className='filter-pro'>Filter Products</h3>
  </div>
<div className="checkfilter">

<div className="check"><input type="checkbox" id="jeans"
                  value="Jeans"
                  onChange={handleProductFilterChange}/>
<label htmlFor="jeans">Jeans</label></div>

<div className="check">  <input type="checkbox"  id="jacket"
                  value="Jacket"
                  onChange={handleProductFilterChange}/>
<label htmlFor="jacket">Jacket</label></div>

<div className="check">  <input type="checkbox" id="denim"
                  value="Denim"
                  onChange={handleProductFilterChange}/>
<label htmlFor="denim">Denim</label></div>

<div className="check">  <input type="checkbox" id="cargo"
                  value="Cargo"
                  onChange={handleProductFilterChange}/>
<label htmlFor="cargo">Cargo</label></div>

</div>


</div>

<div className="product-filter">

  <div className="filter">

    <h3 className='filter-prices'> Filter Price</h3>
  </div>
<div className="checkfilter">

<div className="check"><input type="radio"    name="price_filter" id='all'
                  value={"All"}
                  onChange={handlePriceFilterChange}
                  defaultChecked/>
<label htmlFor="all">All</label></div>

<div className="check"><input type="radio"  id="1T2"
                  name="price_filter"
                  value={"1000-2000"}
                  onChange={handlePriceFilterChange}/>
<label htmlFor="1T2">1000-2000</label></div>

<div className="check">  <input type="radio" id="2T5"  name="price_filter"
                  value={"2000-5000"}
                  onChange={handlePriceFilterChange}/>
<label htmlFor="2T5">2000-5000</label></div>

<div className="check">  <input type="radio"  id="5T10"    name="price_filter"
                  value={"5000-10000"}
                  onChange={handlePriceFilterChange}/>
<label htmlFor="5T10">5000-10000</label></div>

<div className="check">  <input type="radio"  id="10T20" name="price_filter"
                  value={"10000-20000"}
                  onChange={handlePriceFilterChange}/>
<label htmlFor="10T20">10000-20000</label></div>

</div>

</div>

      </div>

<div className="gadget-product-list">
<div className="gadget-list">

      {listProduct.length > 0 ? (
                  listProduct?.map((product, ind) => {
                  return (
                    <div className="gadget-card"key={product?.Id}>
                            <Link to={`/single-product/${product?.Id}`} style={{textDecoration:"none"}}>
                      <div className="gadget-image">
                        {" "}
                        <img
                          src={product.Image[0]}
                          alt={product.Name}
                          className="gadget-img"
                        />
                      </div>
  
                      <div className="category-description">
                  
                        <div>
                          <h6 className="gadget-heading"> {product.Heading}</h6>
                        </div>
                        <div className="price-gadget">
                          <h6 style={{ fontSize: "0.95rem",textDecoration:"line-through",color:"brown" }}>
                            <del> ₹ {product.Price + 99}</del>
                          </h6>
                          <h6 style={{ color: "green", fontSize: "0.95rem" }}>
                            {" "}
                            ₹{product.Price}
                          </h6>
                        </div>
                              <div className="ratings">
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                        </div>
                      </div>
                      </Link>
                    </div>
                 
                );
              })
            ) : (
              <h1 className="text-secondary text-center mt-4">
                Produc's Doesn't Matched
              </h1>
            )}
  </div>

</div>

    </div>
   </div>
   
   </>
  )
}

export default Fashion

