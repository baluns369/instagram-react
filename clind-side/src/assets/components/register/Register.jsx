import React from "react";
import { Link } from "react-router-dom";
import './register.css';

const Register = () => {
return(
    <>
    <div className="cantainer">
            <h2>REGISTER</h2>
            <div className="inputs">
                <div className="input">
                    <h4>User Name :</h4>
                    <input type="text" id="email" name="email"/>
                </div>
                <div className="input">
                    <h4>Password :</h4>
                    <input type="password" id="password" name="password"/>
                </div>
                <div className="input">
                    <h4>Conform Password :</h4>
                    <input type="cpassword" id="cpassword" name="cpassword"/>
                </div>
            </div>
            <Link to="/Email"><button>Create</button></Link>
        </div>
        </>
)
} 
export default Register