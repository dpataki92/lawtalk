import React, { Component } from 'react';
import Reply from "./reply.js";

class Replies extends Component {

    render() {
        const handleReplies = this.props.replies.map((r,id) => {
            return <Reply key={id} answerId={r.answerId} creation={r.creation} answerCreator={r.answerCreator} answerCreatorId={r.answerCreatorId} 
            content={r.content} upvotes={r.upvotes} downvotes={r.downvotes} commentsNum={r.commentsNum} currentUser={this.props.currentUser} 
            renderOnUpdate={this.props.renderOnUpdate}/>
        })
        return(
            <React.Fragment>
                <h5 style={{marginLeft:"12%", marginBottom:"5px", opacity:"0.5"}}>{this.props.replies.length} answers</h5>
                {handleReplies}
            </React.Fragment>
        )
    }
}

export default Replies;