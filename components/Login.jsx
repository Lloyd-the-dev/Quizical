import React from "react";
import graduate from "./images/graduate.png"
import { Link } from "react-router-dom";
import './css/login.scss'

function Login(){
    return(
        <div className="contain"> 
            <h1 className="heading">Quiz<span>Grad</span></h1>
            <div className="message">
                <p>Welcome back!</p>
                <p>Please login to your account</p>
            </div>
            <div className="second-section">
                <div className="inner-section">
                    <label className="mail-label">Email:</label>
                    <input type="text" placeholder="Email" className="inp mail"/>
                    <label htmlFor="">Password:</label> 
                    <input type="password" placeholder="password" className="inp"/> 
                    <div className="bottom-section">
                        <div className="remember-section">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                        <a href="" className="forgot">Forgot Password?</a>
                    </div>
                    <div className="buttons-section">
                        <a href="" className="login-btn-main">Login</a>
                        <a href="/signup" className="sign-btn">Signup</a>
                    </div>
                </div>
                <img src={graduate} alt="" className="login-img"/>
            </div>
        </div>
    )
}

export default Login;