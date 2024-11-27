import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () =>{
    return(
        <>
        <div className="cantainer">
            <h2>SIGN IN</h2>
            <div className="inputs">
                <div className="input">
                    <h4>Email :</h4>
                    <input type="text" id="email" name="email"/>
                </div>
                <div className="input">
                    <h4>Password :</h4>
                    <input type="password" id="password" name="password"/>
                </div>
            </div>
            <button>Forgot Password</button>
            <Link to="/Email"><p>REGISTER</p></Link>
        </div>
        </>
    )
}
export default Login