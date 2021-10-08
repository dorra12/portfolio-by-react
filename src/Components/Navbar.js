import React from 'react'
import '../Styles/Navbar.css';
function Navbar() {
    return (
        
        <div className="navbar">
            <div className="navbar__block">
                <div className="navbar__close">

                </div>
                <nav>
                    <ul className="navbar__list">
                        <li className="navbar__link"><a href="/home">Home</a></li>
                        <li className="navbar__link"><a href="/aboutme">About me</a></li>
                        <li className="navbar__link"><a href="/experience">My experience</a></li>
                        <li className="navbar__link"><a href="skills">My skills</a></li>
                        <li className="navbar__link"><a href="works">My works</a></li>
                        <li className="navbar__link"><a href="contact">Contacts</a> </li>
                    </ul>
                </nav>
                <div className="navbar__social">
                    <a target="_blank" href="https://github.com/dorra12">github</a>
                    <a target="_blank" href="www.linkedin.com">linkedin</a>
                    
                </div>
            </div>
            <div class="navbar__overlay"></div>
        </div>
    )
}

export default Navbar
