import React from "react";
import "../style/Signup.css"; // Ensure you import the CSS file

function Signup() {
  function handleSubmit(){return ("hello")}
  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form className="signup-form" >
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" />

        <label htmlFor="password" >Password</label>
        <input type="password" id="password" placeholder="Password" />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" placeholder="Confirm Password" />

        <button onClick={handleSubmit} >Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
