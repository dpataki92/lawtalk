import React from 'react';
import '../../App.css'; 
import { connect } from 'react-redux';
import { updateSignupForm } from '../../actions/signupForm.js';
import { signup } from '../../actions/currentUser.js';

const Signup = ({signupForm, updateSignupForm, signup, changeState}) => {

	const handleInputChange = e => {
		const {name, value} = e.target
		const updatedFormInfo = {
			...signupForm,
			[name]: value
		}
		updateSignupForm(updatedFormInfo)
	}

	const handleSubmit = e => {
		e.preventDefault();
		signup(signupForm)
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
					
					<div className="wrap-input100 rs1-wrap-input100 m-b-20">
						<input id="username" className="input100" type="text" name="username" placeholder="Username*" required onChange={handleInputChange} value={signupForm.username}/>
					</div>
					<div className="wrap-input100 rs2-wrap-input100 m-b-20">
						<input id="password" className="input100" type="password" name="password" placeholder="Password*" required onChange={handleInputChange} value={signupForm.password}/>
					</div>
                    <div className="wrap-input100 rs1-wrap-input100 m-b-20">
						<input id="email" className="input100" type="text" name="email" placeholder="Email" onChange={handleInputChange} value={signupForm.email}/>
					</div>
					<div className="wrap-input100 rs2-wrap-input100 m-b-20">
						<input id="location" className="input100" type="text" name="location" placeholder="Location" onChange={handleInputChange} value={signupForm.location}/>
					</div>
                    <div className="wrap-input100 wrap-input100 m-b-20">
						<input id="fields" className="input100" type="text" name="fields" placeholder="Legal fields..." onChange={handleInputChange} value={signupForm.fields}/>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Sign up
						</button>
					</div>

					<div className="w-full text-center" style={{marginTop: "100px"}}>
						<a className="txt3" href="#login" onClick={changeState}>
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
		signupForm: state.signupForm
	}
}


export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup);
