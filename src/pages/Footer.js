
import React from 'react';
import '../style/Footer.css' // Make sure to create a CSS file for the Footer component

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Information about the company, mission statement, or history.</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          {/* Example social media links */}
          <a href="https://www.facebook.com">Facebook</a> | <a href="https://www.twitter.com">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Company Name - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

