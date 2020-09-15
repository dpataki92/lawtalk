import React from 'react';
import '../App.css'; 


const Login = props => {
    return (
        <div className="limiter">
            <div className="container-login100" style={{backgroundImage: 'public/login_background/1.jpeg'}}>
                <div className="wrap-login100 p-t-190 p-b-30">
                <form className="login100-form validate-form">
                <span className="login100-form-title p-t-20 p-b-45">
                Welcome to Lawtalk
                </span>
                <div className="wrap-input100 validate-input m-b-10" data-validate="Username is required">
                <input className="input100" type="text" name="username" placeholder="Username"/>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                <i className="fa fa-user"></i>
                </span>
                </div>
                <div className="wrap-input100 validate-input m-b-10" data-validate="Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password"/>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                <i className="fa fa-lock"></i>
                </span>
                </div>
                <div className="container-login100-form-btn p-t-10">
                <button className="login100-form-btn">
                Login
                </button>
                </div>
                <div className="text-center w-full p-t-25 p-b-230">
                <a href="#" className="txt1">
                Forgot Username / Password?
                </a>
                </div>
                <div className="text-center w-full">
                <a className="txt1" href="#">
                Create new account
                <i className="fa fa-long-arrow-right"></i>
                </a>
                </div>
                </form>
                </div>
                </div>
            </div>
    )
}

export default Login;
