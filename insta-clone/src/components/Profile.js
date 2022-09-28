import React from 'react';
import "./Profile.css";
import {MdSettings} from "react-icons/md";
import Header from './Header';

const Profile = ()=>{
    return(
        <div>
        <Header/>
            <div className="profile">
                <div className="profile-header">
                    <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' alt='profile_img'/>
                    <div className="profile-content">
                        <div className="profile-name">
                            <h1>Username</h1>
                            <button className="updateprofile">Edit Profile</button>
                            <i className='sitting'><MdSettings/></i>
                        </div>
                        <div className="profile-counts">
                            <a href="#">posts</a>
                            <a href="#">followers</a>
                            <a href="#">following</a>
                        </div>               
                    </div>
                </div>
                <hr/>
                <div className="profile-label">
                    <a href="#">POSTS</a>
                    <a href="#">SAVED</a>
                    <a href="#">TAGGED</a>
                
                
                </div>


            </div>
        </div>
    )
}

export default Profile;