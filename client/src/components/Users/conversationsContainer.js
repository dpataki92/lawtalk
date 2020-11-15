import React, { Component } from 'react';
import ChatList from './chatList.js';
import MessagesContainer from './messagesContainer.js';
import { connect } from "react-redux";
import  { getCurrentConversations } from "../../actions/conversations.js";
import  { getCurrentConversation } from "../../actions/currentConversation.js";

class ConversationsContainer extends Component {

    state = {
        currentConversationKey: 0
    }

    componentDidMount() {
        let myThis = this
        async function getData () {
            await myThis.props.getCurrentConversations(myThis.props.currentUser.id);
            await myThis.props.getCurrentConversation(myThis.props.currentUser.id, myThis.props.conversations[myThis.state.currentConversationKey].id);
        }
        getData();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.currentConversationKey === this.state.currentConversationKey) {
            return true;
        }
    }

    componentDidUpdate() {
        this.props.getCurrentConversation(this.props.currentUser.id, this.props.conversations[this.state.currentConversationKey].id);
    }

    handleKeyChange = (newKey) => {
        this.setState({
            currentConversationKey: newKey
        })
    }

    render() {
        return(
        <div className="container">
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
                    <div className="input_msg_write">
                    <input type="text" className="write_msg" placeholder="Type a message" />
                    <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                    </div>
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