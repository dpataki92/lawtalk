import React from 'react';
import { connect } from 'react-redux';
import { loginSocialMedia } from '../../actions/currentUser.js';


class SocialMediaContainer extends React.Component {

    handleClick = (e) => {
        if (e.target.className.slice(6) === "google") {this.props.loginSocialMedia("google_oath2")}
        else if (e.target.className.slice(6) === "twitter") {this.props.loginSocialMedia("twitter")}
    }

    render() {
        return(
                <div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">
							or login with social media account
						</span><br/><br/>
						<a  href="#" onClick={this.handleClick} className="fa fa-google"></a>
						<a  href="#" onClick={this.handleClick} className="fa fa-twitter"></a>
				</div>
        )
    }
}

export default connect(null, { loginSocialMedia })(SocialMediaContainer);