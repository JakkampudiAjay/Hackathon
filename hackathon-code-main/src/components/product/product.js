import React from "react";
import "./productstyle.css";

function Product({ name, price, myImage }) {
  return (
    <div className="product-card">
      <img src={myImage} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">Price: ₹{price}</p>
      
    </div>
  );
}

export default Product;