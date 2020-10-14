import React from 'react';
import '../../App.css'; 
import { connect } from 'react-redux';
import { updateLoginForm } from '../../actions/loginForm.js';
import { login } from '../../actions/currentUser.js';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Signup = ({loginForm, updateLoginForm, login, changeState}) => {

	const handleInputChange = e => {
		const {name, value} = e.target
		const updatedFormInfo = {
			...loginForm,
			[name]: value
		}
		updateLoginForm(updatedFormInfo)
	}

	const handleSubmit = e => {
		e.preventDefault();
		login(loginForm)
	}
		
    return (
		<div>
        <div className="limiter" id="login-form">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form" onSubmit={handleSubmit} style={{paddingTop: "100px"}}>
					<span className="login100-form-title p-b-34">
						Lawtalk
					</span>
					
					<div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
						<input id="username" className="input100" type="text" name="username" placeholder="Username" required onChange={handleInputChange} value={loginForm.username}/>
						<span className="focus-input100"></span>
					</div>
					<div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
						<input id="password" className="input100" type="password" name="password" placeholder="Password" required onChange={handleInputChange} value={loginForm.password}/>
						<span className="focus-input100"></span>
					</div>
                    <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
						<input id="username" className="input100" type="text" name="username" placeholder="Username" required onChange={handleInputChange} value={loginForm.username}/>
						<span className="focus-input100"></span>
					</div>
					<div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
						<input id="password" className="input100" type="password" name="password" placeholder="Password" required onChange={handleInputChange} value={loginForm.password}/>
						<span className="focus-input100"></span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Sign up
						</button>
					</div>

					<div className="w-full text-center">
						<a className="txt3" href="#" onClick={changeState}>
							Back to Login
						</a>
					</div>
				</form>
				<div className="login100-more" style={{backgroundImage: `url("/login_background/2.jpg")`}}></div>
			</div>
		</div>
	</div>
	</div>
    )}

const mapStateToProps = state => {
	return {
		loginForm: state.loginForm
	}
}


export default connect(mapStateToProps, { updateLoginForm, login } )(Signup);
