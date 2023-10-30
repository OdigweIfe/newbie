import React from "react";
import './App.css'
import profilePhoto from './assets/profile2.jpg'
const Header = () =>{
    return (
    <div className ='header'>
        <img src={profilePhoto} alt="MyImage" className="imgs"/>
        <h1>Odigwe Ife</h1>
        <h2>Full-Stack Developer</h2>
        <p><a href="#" target="_blank">odigweife.com</a></p>
        <div className="links">
            <a href="mailto:odigwe.ifechukwude@gmail.com" className="btn btn-secondary"><i className="fa-solid fa-envelope"></i>Email</a>
            <a href="https://linkedin.com/in/odigwe-ifechukwude-94a6a6289" className="btn btn-primary"><i className="fa-brands fa-linkedin"></i>Linkedln</a>
        </div>
    </div>
    )
}

export default Header;