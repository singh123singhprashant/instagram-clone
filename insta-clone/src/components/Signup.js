import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";


const Signup = () => {
    return(
        <div className="signup">
            <div className="container">
                <h1 className="signup-tags title">Instagram</h1>
                <p className="signup-tags">Sign up to see photos and videos
                from your friends</p>
                <form className="signup-form">
                    <input type="email" placeholder="Email" required/><br/>
                    <input type="text" placeholder="Full Name" required/><br/>
                    <input type="password" placeholder="Password" required/><br/>
                    <input type="password" placeholder="Password confirmation" required/><br/><br/>
                    <p className="signup-tags">People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                    <p className="signup-tags">By signing up you agree to our Terms & Privacy Policy</p>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <input type="submit" value="Sign Up" className="signup-button" required/>
                    </Link>
                </form>
            </div>
            <br/>
            <div className="modal-footer">
            <p className="signup-tags">Have an account? <Link to="/login" style={{textDecoration:"none"}}>Login</Link></p>
            </div>
        </div>
    
    )
}
export default Signup;
