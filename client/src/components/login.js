import React from 'react';
import '../App.css'; 
import { connect } from 'react-redux';


class Login extends React.Component {

	render () {
    return (
        <div className="limiter" id="login-form">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form" onSubmit={this.handleOnSubmit}>
					<span className="login100-form-title p-b-34">
						Lawtalk
					</span>
					
					<div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
						<input id="username" className="input100" type="text" name="username" placeholder="Username" required onChange={this.handleOnChange} value={this.props.username}/>
						<span className="focus-input100"></span>
					</div>
					<div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
						<input id="password" className="input100" type="password" name="password" placeholder="Password" required onChange={this.handleOnChange} value={this.props.password}/>
						<span className="focus-input100"></span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Sign in
						</button>
					</div>

					<div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">
							or login with social media account
						</span>

					</div>

					<div className="w-full text-center">
						<a href="#" className="txt3">
							Sign Up
						</a>
					</div>
				</form>

				<div className="login100-more" style={{backgroundImage: `url("/login_background/1.jpg")`}}></div>
			</div>
		</div>
	</div>
    )}
}

const mapStateToProps = state => {
	return {
		username: state.loginForm.username,
		password: state.loginForm.password
	}
}



export default connect(mapStateToProps)(Login);
