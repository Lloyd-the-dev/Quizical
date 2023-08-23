import React from "react";
import { Link } from "react-router-dom";
import landingImg from "./images/landing.png"
import "./css/landing.scss"

function Landing(){
    return(
        <div>
            <nav className="navbar">
                <h1>Quiz<span className="inner-logo">Grad</span></h1>
                <div className="inner-nav">
                    <p>How it works?</p>
                    <p>Feautures</p>
                    <p>About us</p>
                    <a href="/login" className="login-btn">Login</a>
                </div> 
            </nav>
            <section className="body-section">
                <div className="body-main">
                    <h2>Learn new concepts for each question</h2>
                    <p>Just to simply test your knowledge in several topics</p>
                    <button className="btn ">Start solving</button>
                </div>
                <img src={landingImg} alt="" className="body-img"/>
            </section>
        </div>
    )
}
export default Landing;