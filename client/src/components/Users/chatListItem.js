import React from 'react';

const ChatListItem = (props) => {
    
    return (
            <div className="chat_people">
                <div className="chat_img"> <img className="msg-profile-img" src={`/${props.chatPartnerAvatar}`}/> </div>
                <div className="chat_ib">
                <h5>{props.chatPartner} <span className="chat_date">{props.lastMessageDate}</span></h5>
                <p>{props.lastMessage}</p>
                </div>
            </div>
    )
}

export default ChatListItem;