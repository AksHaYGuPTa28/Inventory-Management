import React, { Component } from 'react';
import './Login.css';
import wave from '../../images/wave.png';
import bg from '../../images/bg.svg';
import avatar from '../../images/avatar.svg';
// import PermIdentityIcon from '@material-ui/icons/PermIdentity';
// import HttpsIcon from '@material-ui/icons/Https';

export default class Login extends React.Component {

    render() {

        return (
            <div className="Login">
               <img className="Login__wave" src={wave} />
	<div className="Login__container">
		<div className="Login__img">
			<img src={bg} />
		</div>
		<div className="Login__login-content">
			<form action="index.html">
				<img src={avatar} />
				<h2 className="Login__title">Welcome</h2>
           		<div className="Login__input-div Login__one">
           		   <div className="Login__i">
                          {/* <PermIdentityIcon /> */}
           		   		{/* <i class="fas fa-user"></i> */}
           		   </div>
           		   <div className="Login__div">
           		   		<h5>Username</h5>
           		   		<input type="text" className="Login__input" />
           		   </div>
           		</div>
           		<div className="Login__input-div Login__pass">
           		   <div className="Login__i"> 
           		    	{/* <i class="fas fa-lock"></i> */}
                           {/* <HttpsIcon /> */}
           		   </div>
           		   <div className="Login__div">
           		    	<h5>Password</h5>
           		    	<input type="password" className="Login__input" />
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="Login__btn" value="Login" />
            </form>
        </div>
    </div>
            </div>
        )
    }
}

