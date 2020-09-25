import React, { Component } from 'react';
import Reply from "./reply.js";

class Replies extends Component {

    handleReplies = () => {
        this.props.replies.map((r) => {
            return <Reply avatar={r.avatar} creation={r.creation} username={r.username} content={r.content} comments={r.comments} upvotes={r.upvotes} dowvotes={r.downvotes}/>
        })
    }

    render() {
        return(
            <div>{this.handleReplies}</div>
        )
    }
}

export default Replies;