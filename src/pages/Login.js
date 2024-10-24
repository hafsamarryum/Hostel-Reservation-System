import React from "react";
import "../style/Login.css"; // Make sure to import the CSS file
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Ensure this import is correct

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then((response) => {
        console.log(response);
        // Depending on how your backend is set up, you might need to adjust the condition here
        if (response.data === "Success") {
          alert("login successfully");
          navigate('/shop'); // Adjust the route as necessary
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred. Please try again.");
      });
  };

  // Updated event handlers for email and password
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="loginEmail">Email</label>
        <input 
          type="email" 
          id="loginEmail" 
          placeholder="Email" 
          value={email} 
          onChange={handleEmailChange} // Updated to use handleEmailChange
        />

        <label htmlFor="loginPassword">Password</label>
        <input 
          type="password" 
          id="loginPassword" 
          placeholder="Password" 
          value={password} 
          onChange={handlePasswordChange} // Updated to use handlePasswordChange
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
