import React, { Component } from 'react';
import ChatListItem from './chatListItem.js'

class ChatList extends Component {
    render() {
        let chatlist = this.props.chatlist.map((c, id)=> {
            return (
                    <div className={`chat_list ${id === 0 ? 'active_chat' : null}`}> 
                    <ChatListItem
                        key={id}
                        conversationId={c.id}
                        lastMessageDate={c.lastMessageDate}
                        lastMessage={c.lastMessage}
                        chatPartner={c.chatPartner}
                        chatPartnerAvatar={c.chatPartnerAvatar}
                    />
                    </div>
            )
        })
        return chatlist;
    }
}

export default ChatList;