import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="bottom">
            <ul id='footer-list'>
                <li><span><img className='logo' id="reactLogo" src="assets/images/react-logo.png"/></span> Foo Fighters Clicky Game!</li>
                <li>Steve Tucker</li>
                <li><a href="https://github.com/rookie-22/Clicky-Game" target="blank"><span><img className='logo' src="assets/images/github.png"/></span> Github</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer;