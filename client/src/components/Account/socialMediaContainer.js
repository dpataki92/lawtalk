import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SocialMediaLink from './socialMediaLink.js';
import { connect } from 'react-redux';
import { loginSocialMedia } from '../../actions/currentUser.js';


class SocialMediaContainer extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route key="twitter" exact path="/login/twitter" render={(props) => <SocialMediaLink {...props} provider={"twitter"}/>}/>
                    <Route key="google" exact path="/login/google" render={(props) => <SocialMediaLink {...props} provider={"google"}/>}/>
                </Switch>
                <div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">
							or login with social media account
						</span><br/><br/>
						<Link  to="/login/google" className="fa fa-google"></Link>
						<Link  to="/login/twitter" className="fa fa-twitter"></Link>
				</div>
            </Router>
        )
    }
}

export default connect(null, { loginSocialMedia })(SocialMediaContainer);