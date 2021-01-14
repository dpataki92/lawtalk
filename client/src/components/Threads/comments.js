import React, { Component } from 'react';
import Comment from "./comment.js";

class Comments extends Component {

    render() {
        const handleReplies = this.props.comments.map((c,id) => {
            return <Comment key={id} first={id === 0 ? true : false} commentsNum={this.props.commentsNum} commentId={c.commentId} creation={c.creation} commentCreator={c.commentCreator} commentCreatorId={c.commentCreatorId} content={c.content} upvotes={c.upvotes} downvotes={c.downvotes} currentUser={this.props.currentUser}/>
        });
        return handleReplies
    }
}

export default Comments;