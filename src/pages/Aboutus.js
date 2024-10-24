import React from 'react';
import '../style/Aboutus.css'; // Make sure to create a CSS file for this styling

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <section className="aboutus-banner">
        <h1>About Us</h1>
        <p>Discover who we are, our journey, and why we're dedicated to providing you the best service.</p>
      </section>
      
      <section className="aboutus-content">
        <h2>Our Mission</h2>
        <p>To connect people with the best local hostels, providing a seamless and enjoyable booking experience.</p>
        
        <h2>Our Story</h2>
        <p>Founded in [Year], we started with a simple idea to make hostel booking easier, faster, and more reliable. Today, we're proud to have helped thousands of travelers find their perfect stay.</p>
        
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide selection of hostels and accommodations.</li>
          <li>User-friendly booking platform.</li>
          <li>24/7 customer support.</li>
          <li>Secure and trusted payment options.</li>
        </ul>
      </section>
    </div>
  );
};

export default Aboutus;
