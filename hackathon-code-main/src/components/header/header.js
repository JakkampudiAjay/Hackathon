import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';
import './headerstyle.css';
import { useNavigate } from 'react-router-dom';
import Home from '../home/home';

const Header = () => {
  const [cartCount] = useState(3); // This would come from your cart context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const onClickcart = () => {
    navigate('/cart');
  };
  const onClickhome = () => {
    navigate('/cart');
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            
            {/* Logo */}
            <div className="logo-section">
              <a href='/'>
                <div className="logo-container">
                  <div className="logo-icon"  onClick={onClickhome}>
                    <span className="logo-text">Λ</span>
                  </div>
                  <span className="logo-name">
                    ΛDIVI
                  </span>
                </div>
                </a>
            </div>


            {/* Search Bar - Desktop */}
            <div className="search-container">
              <div className="search-wrapper">
                <div className="search-icon">
                  <Search className="search-icon-svg" />
                </div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search products..."
                />
              </div>
            </div>

            {/* Right side icons */}
            <div className="header-actions">
              
              {/* Search Icon - Mobile */}
              <button className="mobile-search-btn">
                <Search className="icon" />
              </button>

              {/* Cart Icon */}
              <button className="cart-btn" onClick={onClickcart}>
                <ShoppingCart className="icon" />
                {cartCount > 0 && (
                  <span className="cart-badge">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>

              {/* Account Icon - Guest */}
              <div className="account-section">
                <button className="account-btn">
                  <User className="icon" />
                  <span className="account-text">Guest</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;