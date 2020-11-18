import React from 'react';
import { connect } from 'react-redux';
import { loginSocialMedia } from '../../actions/currentUser.js';
import { useAuth0} from '@auth0/auth0-react';

const SocialMediaContainer = () => {

        const { loginWithRedirect } = useAuth0();
        const { user } = useAuth0();

        console.log(user)

        return(
                <div className="w-full text-center p-t-10 p-b-100">
						<span className="txt1">
							or login with social media account
						</span><br/><br/>
						<a  href="" onClick={() => loginWithRedirect()} className="fa fa-google"></a>
						<a  href="" onClick={() => loginWithRedirect()} className="fa fa-twitter"></a>
				</div>
        )
}

export default SocialMediaContainer;