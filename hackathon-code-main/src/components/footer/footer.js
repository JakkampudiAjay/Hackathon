import React from 'react';
import './footerstyle.css';

const Footer = () => {
  const teamMembers = [
    'Ajay',
    'Dinesh', 
    'Vinayak',
   
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Left Side - Logo (Horizontal) */}
          <div className="footer-left">
            <div className="logo-section">
              <div className="logo-icon">
                <span className="logo-text">Λ</span>
              </div>
              <div className="logo-info">
                <div className="brand-name">ΛDIVI</div>
                <div className="brand-tagline">Your Shopping Destination</div>
              </div>
            </div>
          </div>

          {/* Center - Hackathon Text */}
          <div className="footer-center">
            <h2 className="hackathon-title">
              Codegnan Hackathon
            </h2>
          </div>

          {/* Right Side - Team Members (Horizontal) */}
          <div className="footer-right">
            <div className="team-section">
              <span className="team-label">Team:</span>
              {teamMembers.map((member, index) => (
                <span key={index} className="team-member">
                  {member}{index < teamMembers.length - 1 ? ',' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2025 ΛDIVI. All rights reserved.
            </div>
            <div className="made-with-love">
              Made with ❤️ for Codegnan Hackathon
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;