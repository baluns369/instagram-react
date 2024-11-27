import React from "react";
import { Link } from "react-router-dom";
import './email.css'

const Email = () => {
return(
    <>
    <div class="container">
        <h1>INSTAGRAM</h1>
        <p>Please enter your email address to verify your account.</p>
        
            <h4>Email :</h4>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
            <button type="submit" class="submit-btn">Verify Email</button>
       
        
        <div id="error-message" class="error-message"></div>
    </div>
    </>
)
}
export default Email