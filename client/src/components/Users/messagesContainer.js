import React, { Component } from 'react';
import IncomingMessage from './incomingMessage.js';
import OutgoingMessage from './outgoingMessage.js';

class MessagesContainer extends Component {
    
    render() {
        return this.props.currentConversation.map((m, id) => {
            return (m.status === "incoming" ?
                    <IncomingMessage
                        key={id}
                        content={m.content}
                        messageDate={m.messageDate}
                        messageTime={m.messageTime}
                        chatPartnerAvatar={m.chatPartnerAvatar}
                    />
            :
                    <OutgoingMessage
                        key={id}
                        content={m.content}
                        messageDate={m.messageDate}
                        messageTime={m.messageTime}
                />)
            
        })
    }
}

export default MessagesContainer;