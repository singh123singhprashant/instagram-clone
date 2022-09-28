import React from "react";
import "./Header.css";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        
    <div class="header">
        <Link to ="/" style={{textDecoration:"none"}}>
            <h1><FaInstagram className="icon"/>Instagram</h1>
        </Link>
        <input type="text" className="search-box" placeholder="search...."/>
        <div className="header-itemsright">
            <Link to ="/signup" style={{textDecoration:"none"}}>
                <div className="nav-item">
                    <span className="nav-item-1">Hello Guest</span>
                    <span className="nav-item-2">Sign Up</span>
                </div>
            </Link>
            <Link to ="/login" style={{textDecoration:"none"}}>
                <div className="nav-item">
                    <span className="nav-item-1">Hello User</span>
                    <span className="nav-item-2">Login</span>
                </div>
            </Link>
            <Link to ="/post" style={{textDecoration:"none"}}>
                <div className="nav-item">
                    <span className="nav-item-1">Create A</span>
                    <span className="nav-item-2">Post</span>
                </div>
            </Link>
            <Link to ="/profile" style={{textDecoration:"none"}}>
                <div className="nav-item">
                    <span className="nav-item-1">View Your</span>
                    <span className="nav-item-2">Profile</span>
                </div>
            </Link>

        </div>
    </div>
    


    )
}
export default Header