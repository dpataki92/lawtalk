import React, { Component } from 'react';
import ChatList from './chatList.js';
import MessagesContainer from './messagesContainer.js';
import MessagesInput from './messagesInput.js';
import { connect } from "react-redux";
import  { getCurrentConversations } from "../../actions/conversations.js";
import  { getCurrentConversation } from "../../actions/currentConversation.js";

class ConversationsContainer extends Component {

    state = {
        currentConversationKey: 0,
        currentConversationId: ''
    }

    componentDidMount() {
        let myThis = this
        async function getData () {
            await myThis.props.getCurrentConversations(myThis.props.currentUser.id);
            await myThis.props.getCurrentConversation(myThis.props.currentUser.id, myThis.props.conversations[myThis.state.currentConversationKey].id);
            myThis.setState({
                currentConversationId: myThis.props.conversations[myThis.state.currentConversationKey].id
            })
            let msgDiv = document.querySelector(".msg_history");
            msgDiv.scrollTop = msgDiv.scrollHeight;
        }
        getData();
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentConversationKey !== this.state.currentConversationKey) {
            this.props.getCurrentConversation(this.props.currentUser.id, this.props.conversations[this.state.currentConversationKey].id);
            this.setState({
                currentConversationId: this.props.conversations[this.state.currentConversationKey].id
            })
            let msgDiv = document.querySelector(".msg_history");
            msgDiv.scrollTop = msgDiv.scrollHeight;
        }
        let msgDiv = document.querySelector(".msg_history");
        msgDiv.scrollTop = msgDiv.scrollHeight;
    }

    handleKeyChange = (newKey) => {
        this.setState({
            currentConversationKey: newKey
        })
    }

    render() {
        return(
        <div className="container conversation">
        <h3 style={{marginBottom: 5}}>Private messages</h3>
        <div className="messaging">
            <div className="inbox_msg">
                <div className="inbox_people">
                <div className="headind_srch">
                    <div className="recent_heading">
                    <h4>Recent</h4>
                    </div>
                </div>
                <div className="inbox_chat">
                    <ChatList chatlist={this.props.conversations} handleKeyChange={this.handleKeyChange}/>
                </div>
                </div>
                <div className="mesgs">
                <div className="msg_history">
                    <MessagesContainer currentConversation={Array.from(this.props.currentConversation)} />
                </div>
                <div className="type_msg">
                    <MessagesInput currentUserId={this.props.currentUser.id} currentConversationId={this.state.currentConversationId} getCurrentConversation={this.props.getCurrentConversation} getCurrentConversations={this.props.getCurrentConversations}/>
                </div>
                </div>
            </div>
            </div></div>
        )
    }
}

const mapStateToProps = ({conversations, currentUser, currentConversation}) => {
    return {
        conversations,
        currentUser,
        currentConversation
    }
  }

  export default connect(mapStateToProps, { getCurrentConversations, getCurrentConversation })(ConversationsContainer);