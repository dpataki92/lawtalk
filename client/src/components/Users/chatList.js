import React, { Component } from 'react';
import ChatListItem from './chatListItem.js'

class ChatList extends Component {

    handleClick = (e) => {
        this.props.handleKeyChange(e.target.closest(".chat_list").id)
        document.querySelector(".active_chat").classList.remove("active_chat");
        e.target.closest(".chat_list").classList.add("active_chat");
    }

    render() {
        let chatlist = this.props.chatlist.map((c, id)=> {
            return (
                    <div id={id} className={`chat_list ${id === 0 ? 'active_chat' : ""}`} onClick={this.handleClick}> 
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