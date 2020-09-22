import React, { Component } from 'react';

class Replies extends Component {

    handleReplies = () => {
        this.props.replies.map((r) => {
            <Reply avatar={r.avatar} creation={r.creation} username={r.username} content={r.content} comments={r.comments} upvotes={r.upvotes} dowvotes={r.downvotes}/>
        })
    }

    render() {
        return(
            <div>{this.handleReplies}</div>
        )
    }
}

export default Replies;