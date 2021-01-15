import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/currentUser.js';

const DemoUserLogin = ({login}) => {

    const handleLogin = (e) => {
        e.preventDefault();
        login({username: "Demo User", password: "demoUserPassword"})
    }

    return(
            <div className="w-full text-center p-t-10">
                    <br></br>
                    <span className="txt1">
                        or login as <a href="/" onClick={handleLogin} className="text-big">Demo User</a>
                    </span><br/><br></br>
            </div>
    )
}

export default connect(null, { login } )(DemoUserLogin);