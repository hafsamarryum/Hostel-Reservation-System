import React from 'react';
import '../style/Contact.css'; // Make sure to create a CSS file for styling
import { useState } from 'react';
import axios from 'axios';
const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [messag, setMsg] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleMessageChange = (event) => {
    let limit =event.target.value;
    if(limit.length<100)
    {
      setMsg(limit);
    }
    else
    {
      alert("Your message is too long")
    }
  }

  const handleSubmit = (event) => {

    axios.post('http://localhost:3001/contact', { name, email, messag })
      .then((response) => {
        alert("Message sent successfully!",response);
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        alert("Failed to send message. Please try again later.");
      });
  }
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required onChange={handleNameChange} value={name}/>
        </div>
        
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required value={email} onChange={handleEmailChange} />
        </div>
        
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required value={messag} onChange={handleMessageChange}></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contactus;
