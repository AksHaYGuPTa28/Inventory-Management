import React, { Component } from 'react';
import './Login.css';
import wave from '../../images/wave.png';
import bg from '../../images/bg.svg';
import avatar from '../../images/avatar.svg';
import {withRouter} from 'react-router';
// import PermIdentityIcon from '@material-ui/icons/PermIdentity';
// import HttpsIcon from '@material-ui/icons/Https';

class Login extends React.Component {

	state = {
		username: 'test@inventoryapp.com',
		password: 'test1234'
	}
	handleLogin = () => {
		if (this.state.username !== 'test@inventoryapp.com') {
			alert('Invalid Credentials');
			return
		}
		if (this.state.password !== 'test1234') {
			alert('Email Id & Password didn\'t match');
			return
		}
		this.props.history.push('/home');
	}
	render() {

		return (
			<div className="Login">
				<img className="Login__wave" src={wave} />
				<div className="Login__container">
					<div className="Login__img">
						<img src={bg} />
					</div>
					<div className="Login__login-content">
						<form onSubmit={this.handleLogin}>
							<img src={avatar} />
							<h2 className="Login__title">Welcome</h2>
							<div className="Login__input-div Login__one">
								<div className="Login__i">
									{/* <PermIdentityIcon /> */}
									{/* <i class="fas fa-user"></i> */}
								</div>
								<div className="Login__div">
									
									<input value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} type="text" name="product" className="Login__input" />
								</div>
							</div>
							<div className="Login__input-div Login__pass">
								<div className="Login__i">
									{/* <i class="fas fa-lock"></i> */}
									{/* <HttpsIcon /> */}
								</div>
								<div className="Login__div">
									<input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type="password" label="password" className="Login__input" />
								</div>
							</div>
							<input type="submit" className="Login__btn" value="Login" />
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default withRouter(Login);

