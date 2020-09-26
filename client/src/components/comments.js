import React, { Component } from 'react';
import Comment from "./comment.js";

class Comments extends Component {

    render() {
        const handleReplies = this.props.comments.map((c) => {
            return <Comment commentId={c.commentId} creation={c.creation} commentCreator={c.commentCreator} commentCreatorId={c.commentCreatorId} content={c.content} upvotes={c.upvotes} downvotes={c.downvotes}/>
        })
        return(
            <div>
                {handleReplies}
            </div>
        )
    }
}

export default Comments;