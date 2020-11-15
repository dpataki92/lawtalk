import React from 'react';

const IncomingMessage = (props) => {
    return(
        <div className="incoming_msg">
            <div className="incoming_msg_img"> 
                <img className="msg-profile-img" src={`/${props.chatPartnerAvatar}`}/> 
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{props.content}</p>
                    <span className="time_date incoming"> {props.messageTime}    |    {props.messageDate}</span>
                </div>
            </div>
        </div>
    )
}

export default IncomingMessage;