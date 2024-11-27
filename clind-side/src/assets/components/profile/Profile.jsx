import React from "react";
import { Link } from "react-router-dom";
import './profile.css'

const Profile = () => {
    return(
        <>
            <div class="container">
        <div class="left" id="left">

            
            {/* <img src="../photos/115-1150152_default-profile-picture-avatar-png-green.png" alt="pro pic" id="profile"> */}
            <h2 id="username">RM</h2>
            <div class="details">
                <h5>Email:</h5>
                <div id="email">rm@gmail.com</div>
            </div>
            <div class="details">
                <h5>Place:</h5>
                <div id="place">Paris</div>
            </div>
            <div class="details">
                <h5>Place:</h5>
                <div id="address">address,aajhbshjbahjb,dasuhshb</div>
            </div>
            <div class="details">
                <h5>Pincode:</h5>
                <div id="pincode">653724</div>
            </div>
            <div class="details">
                <h5>Phone:</h5>
                <div id="phone">9876542524</div>
            </div>
            <a href="./useredit.html"><button>Edit</button></a>
            <button>Logout</button>
            
        </div>
        <div class="right" id="right">
            
        </div>
    </div>
        </>
    )
}
export default Profile