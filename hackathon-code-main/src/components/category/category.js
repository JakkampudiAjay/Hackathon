import React from "react";
import Product from "../product/product";
import "./categorystyle.css";
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import blackShirt from '../assets/images/cloths/blackShirt.jpg';


function ProductCategory({ categoryName = "Products", products = [] }) {
    const [product] = useState({
      
      name: "Blackshirt",
      image: blackShirt,
      price: "$19.00",
      description: "Featuring a solid pattern, this men's shirt brings a classic and timeless appeal to your wardrobe. You can enjoy the versatility of this design, making it an ideal choice for various occasions, from business meetings to evening gatherings.",
      features: [
        "Premium quality materials",
        
        "Great value for money"
      ]
    });

    const [buttonState, setButtonState] = useState({
      text: 'Add to Cart',
      isProcessing: false
    });

    const handleBuyProduct = () => {
      // Simple alert for demo purposes
      alert(`Added ${product.name} to cart!\nPrice: ${product.price}`);
      
      // Visual feedback
      setButtonState({
        text: 'Added to Cart!',
        isProcessing: true
      });
      
      setTimeout(() => {
        setButtonState({
          text: 'Add to Cart',
          isProcessing: false
        });
      }, 1000);
    };
  return (
    
    <div>
      <Header></Header>
          <div className="container">
          <div className="product-display">
            <div className="product-image">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-img"
              />
            </div>
            
            <div className="product-details">
              <h1 className="product-name">{product.name}</h1>
              <div className="product-price">{product.price}</div>
              <p className="product-description">
                {product.description}
              </p>
              
              <div className="product-features">
                <h4>Key Features:</h4>
                <ul className="features-list">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <button 
                className={`buy-button ${buttonState.isProcessing ? 'processing' : ''}`}
                onClick={handleBuyProduct}
              >
                {buttonState.text}
              </button>
            </div>
          </div>
          </div>
      <Footer></Footer>
    </div>
  );
   
};




export default ProductCategory;