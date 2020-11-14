import React, { Component } from 'react';
import ChatListItem from './chatListItem.js'

class ChatList extends Component {
    render() {
        let chatlist = this.props.chatlist.map((c, id)=> {
            return (
                    <ChatListItem
                        key={id}
                        conversationId={c.id}
                        lastMessageDate={c.lastMessageDate}
                        lastMessage={c.lastMessage}
                        chatPartner={c.chatlist}
                    />
            )
        })
        return chatlist;
    }
}

export default ChatList;