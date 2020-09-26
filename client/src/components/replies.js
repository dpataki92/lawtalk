import React, { Component } from 'react';
import Reply from "./reply.js";

class Replies extends Component {

    render() {
        const handleReplies = this.props.replies.map((r,id) => {
            return <Reply key={id} answerId={r.answerId} creation={r.creation} answerCreator={r.answerCreator} content={r.content} upvotes={r.upvotes} downvotes={r.downvotes} commentsNum={r.commentsNum} currentUser={this.props.currentUser}/>
        })
        return(
            <div>
                <h5 style={{marginLeft:"12%", marginBottom:"5px", opacity:"0.5"}}>{this.props.replies.length} answers</h5>
                {handleReplies}
            </div>
        )
    }
}

export default Replies;