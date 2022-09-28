import React from 'react';
import "./Login.css";
import { Link } from "react-router-dom"

const Login = () => {
    return(
        <div className="login">
            <h1 className="login-tags title">Instagram</h1>
            <form className='login-form'>
                <input type="email" name="email" placeholder="Email" required /><br/>
                <input type="password" name="password" placeholder="Password" required /><br/>
                <Link to="/" style={{textDecoration:"none"}}>
                <input type="submit" name="submit" value="Log In" className="login-button"/>
                </Link>
            </form>
            <p className='login-tags'>Don't have an account? <Link to="/signup" style={{textDecoration:"none"}}>Sign Up</Link></p>
        </div>
    )
}
export default Login;