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

    async componentDidMount() {
        if (this.props.location.userId) {
            await fetch(`/api/users/${this.props.currentUser.id}/conversations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
                },
                body: JSON.stringify({userId: this.props.location.userId})
            })
            .then(resp => resp.json())
            .then(json => {
                if (json.message) {
                    console.log(json.message)
                }         
            })
        }
        
        await this.props.getCurrentConversations(this.props.currentUser.id);

        if (this.props.conversations.length !== 0) {
            await this.props.getCurrentConversation(this.props.currentUser.id, this.props.conversations[this.state.currentConversationKey].id);
            this.setState({
                currentConversationId: this.props.conversations[this.state.currentConversationKey].id
            })
            let msgDiv = document.querySelector(".msg_history");
            msgDiv.scrollTop = msgDiv.scrollHeight;
        }
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
        if (msgDiv) {msgDiv.scrollTop = msgDiv.scrollHeight};
    }

    handleKeyChange = (newKey) => {
        this.setState({
            currentConversationKey: newKey
        })
    }

    handleFullScreen = (e) => {
        if (e.target.parentNode.id === "open-full-screen") {
            document.querySelector(".inbox_chat").style.display= "none";
            document.querySelector(".headind_srch").style.display= "none";
            document.querySelector(".mesgs").style.width = "100%";
            document.querySelector("#close-full-screen").style.display="initial"
        } else if (e.target.parentNode.id === "close-full-screen") {
            document.querySelector(".inbox_chat").style.display= "initial";
            document.querySelector(".headind_srch").style.display= "block";
            document.querySelector(".mesgs").style.width = "70%";
            document.querySelector("#close-full-screen").style.display="none"
        }

    }

    render() {
        return this.props.conversations.length === 0 ? 
        (
            <div className="container conversation">
            <h3 style={{marginBottom: 5}}>No conversations yet.</h3>
            </div>
        ) :
        (
            <div className="container conversation">
            <h3 style={{display: "inline", marginBottom: 5}}>Private messages</h3>
            <div id="close-full-screen" style={{cursor:"pointer", display: "none", float: "right", color: "#007bff"}} onClick={this.handleFullScreen}><span><i class="fa fa-times"></i> Close full screen</span></div>

            <div className="messaging">
                <div className="inbox_msg">
                    <div className="inbox_people">
                    <div className="headind_srch">
                        <div className="recent_heading">
                        <h4>Recent</h4>
                        </div>
                        <div id="open-full-screen" style={{cursor:"pointer", float: "right", color: "#007bff"}} onClick={this.handleFullScreen}><i class="fa fa-times"></i></div>
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