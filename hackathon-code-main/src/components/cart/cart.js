import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cartstyle.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div>
    <Header></Header>
        <div className="cart-container">
            
                <div className="cart-container">
                {/* Header */}
                <div className="cart-header">
                    <h2 className="cart-title">Your Cart</h2>
                    <div className="cart-divider"></div>
                </div>

                {/* Empty Cart Content */}
                <div className="empty-cart-content">
                    <div className="cart-icon-container">
                    <svg 
                        className="cart-icon" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" 
                        />
                    </svg>
                    </div>
                    <h3 className="empty-cart-title">Your cart is empty</h3>
                    <p className="empty-cart-text">Add some items to get started!</p>
                </div>

                {/* Total Bill Section */}
                <div className="total-section">
                    <div className="total-row">
                    <span className="total-label">Subtotal:</span>
                    <span className="total-value">$0.00</span>
                    </div>
                    <div className="total-row">
                    <span className="total-label">Shipping:</span>
                    <span className="total-value">$0.00</span>
                    </div>
                    <div className="total-row">
                    <span className="total-label">Tax:</span>
                    <span className="total-value">$0.00</span>
                    </div>
                    <hr className="total-divider" />
                    <div className="total-row total-final">
                    <span className="total-label-final">Total:</span>
                    <span className="total-value-final">$0.00</span>
                    </div>
                </div>

                {/* Order Now Button */}
                <button 
                    className="order-btn order-btn-disabled"
                    disabled={true}
                    onClick={() => console.log('Order placed!')}
                >
                    Order Now
                </button>
                
                {/* Continue Shopping Link */}
                <button className="continue-shopping-btn">
                    Continue Shopping
                </button>
                </div>
        </div>
    <Footer></Footer>
    </div>
  );
};

export default Cart;