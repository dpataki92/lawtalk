import React, { Component } from 'react';

class MessagesInput extends Component {

    state = {
        message: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        let props = this.props;
        e.preventDefault();
        fetch(`/api/users/${props.currentUserId}/conversations/${props.currentConversationId}`, {
            method: "POST",
            headers: {"Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`},
            body: JSON.stringify(this.state)
          })
          .then(resp => resp.json())
          .then(function(json) {
            if (json.message === "success") {
                props.getCurrentConversation(props.currentUserId, props.currentConversationId);
                props.getCurrentConversations(props.currentUserId);
            } else {
                alert("Something went wrong.")
            }
          })
    }

    render() {
        return(
            <div className="input_msg_write">
                <input type="text" className="write_msg" placeholder="Type a message" name="message" onChange={this.handleChange} value={this.state.message} required/>
                <button className="msg_send_btn btn-primary" type="button" onClick={this.handleSubmit}><i className="fa fa-gavel" aria-hidden="true"></i></button>
            </div>
        )
    }
}

export default MessagesInput;