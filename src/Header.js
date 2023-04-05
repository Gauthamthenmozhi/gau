import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="showcase">
        <div className="showcase-top">
            <img src="logo.png" alt="logo"/>
            <Link to="/"className="btn btn-rounded">Sign In
            </Link>
    </div>
    <div className="showcase-content">
            <h1>See what's next</h1>
            <p>Watch anywhere. Cancel Anytime</p>
            <Link to ="/netflix-show"  className="btn btn-xl">
            Watch Free For 30 Days
            <i class="fas fa-chevron-right btn-icon"></i>
            </Link>
            </div>
    
    </header>

  )
}

export default Header;