import React from 'react'
import { Link } from "react-router-dom";
import "./css/nav.css"

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo'>

        </div>
        <div class="nav-items">
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/contactus">
                <li>Contact Us</li>
            </Link>
        </div>
    </div>
  );
};

export default Nav