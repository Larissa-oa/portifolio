import React from 'react';
import './Footer.css';

const Footer = ({ isToggled }) => {
  
  const footerStyles = {
    backgroundColor: isToggled ? '#fff' : '#111', 
    color: isToggled ? '#333' : '#ccc'            
  };

  return (
    <footer className="footer" style={footerStyles}>
      <div className="footer-content">
        <a href="mailto:oa.larissa@hotmail.com">
          <h4>Let's get in touch!</h4>
        </a>
        <p className="footer-text" style={footerStyles}>
          <span>Email: <a href="mailto:oa.larissa@hotmail.com">oa.larissa@hotmail.com</a></span>
          <span> | </span>
          <span>Phone: <a href="tel:+1234567890">+31 6 1529 5664</a></span>
        </p>
        <p className="footer-note">© 2025 Larissa Almeida. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
