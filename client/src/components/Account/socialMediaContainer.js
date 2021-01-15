import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loginSocialMedia } from '../../actions/currentUser.js';
import { useAuth0} from '@auth0/auth0-react';

const SocialMediaContainer = ({loginSocialMedia}) => {

    useEffect(() => {
        if(user) {
         loginSocialMedia(user)
    }});

    const { loginWithRedirect } = useAuth0();
    const { user } = useAuth0();

    return(
            <div className="w-full text-center p-b-100">
                    <span className="txt1">
                        or login with social media account
                    </span><br/><br/>
                    <a  href="" onClick={() => loginWithRedirect()} className="fa fa-google"></a>
                    <a  href="" onClick={() => loginWithRedirect()} className="fa fa-twitter"></a>
            </div>
    )
}

export default connect(null, {loginSocialMedia})(SocialMediaContainer);