import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments.js';
import { connect } from 'react-redux';
import { getCurrentComments } from '../../actions/currentComments.js';
import ReplyForm from './replyForm.js';
import DeleteButton from './deleteButton.js';


class Reply extends Component {

    handleVoting = (e) => {
        let id = this.props.answerId;
        fetch(`/api/answers/${id}/vote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
            },
            body: JSON.stringify({
                id: id,
                vote: e.target.parentNode.id
            })
        })
        .then(resp => resp.json())
        .then(function(json) {
            alert(json.message);
            if (json.success) {
                let answerFooter = document.getElementById(id);
                answerFooter.querySelector("#upvote").style.opacity = "0.5";
                answerFooter.querySelector("#downvote").style.opacity = "0.5";
                answerFooter.querySelector("#upvoteNum").innerText = `${json.answerUpvotes} upvotes`
                answerFooter.querySelector("#downvoteNum").innerText = `${json.answerDownvotes} downvotes`
            }
        })   
    }

    handleComments = (e) => {
        let commentDiv = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".comments-div")
        if (commentDiv.style.display === "none") {
            this.props.getCurrentComments(this.props.answerId)
            if (!(this.props.commentsNum === 0)) {
                e.target.innerText = "Hide comments";
                commentDiv.style.display = "block";
            }

        } else {
            e.target.innerText = `Show comments (${this.props.commentsNum})`;
            commentDiv.style.innerHTML = "";
            commentDiv.style.display = "none"
        }
    }

    handleReplyForm = (e) => {
        let replyFormDiv = e.target.parentNode.parentNode.parentNode.querySelector(".reply-form")
        if (replyFormDiv.style.display === "none") {
            replyFormDiv.style.display = "block";
        } else {
            replyFormDiv.style.display = "none"
        }
    }

    updateComments = () => {
        this.props.getCurrentComments(this.props.answerId);
    }

    render() {
        const props = this.props
        return(
            <div className="container-fluid mt-100" style={{width: "80%"}} >
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-4" style={{border:"1px solid #0062cc"}}>
                            <div className="card-header">
                                <div className="media flex-wrap w-100 align-items-center">
                                    <div className="media-body ml-3"> <Link to={`/users/${props.answerCreatorId}`} data-abc="true">{props.answerCreator}</Link>
                                        <div className="text-muted small">{props.creation}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <p> {props.content}
                                </p>
                            </div>
                            <div className="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3" id={props.answerId}>
                                <div className="px-4 pt-3"> 
                                <Link to=" " style={{cursor: "pointer"}} id="upvote" onClick={this.handleVoting}> <i className="fa fa-arrow-up text-success" style={{fontSize: "1.3em"}}></i> </Link>  <span id="upvoteNum" style={{opacity: "0.5", marginRight:"5px"}} >{props.upvotes} upvotes</span> 
                                <Link to=" " style={{cursor: "pointer"}} id="downvote" onClick={this.handleVoting}> <i className="fa fa-arrow-down text-danger" style={{fontSize: "1.3em"}}></i> </Link>  <span id="downvoteNum" style={{opacity: "0.5", marginRight:"5px"}}>{props.downvotes} downvotes</span> 
                                <i className="fa fa-comments-o text-muted" style={{fontSize: "1.3em"}}></i> <a data-abc="true" style={{cursor: "pointer"}} id="downvote" onClick={this.handleComments}> <span id="comments" style={{opacity: "0.5"}}>Show comments ({props.commentsNum})</span>  </a>  

                                </div>
                                <div className="px-4 pt-3"> {props.answerCreator === props.currentUser ? <DeleteButton postId={props.answerId} type={"answer"}/> : ""} <button type="button" onClick={this.handleReplyForm} className="btn btn-primary"><i className="ion ion-md-create"></i> Reply</button> </div>
                            </div>
                            <div className="card-body reply-form" style={{display: "none", borderBottom:"1px solid #0062cc"}}>
                                {<ReplyForm type={"comment"} postId={props.answerId} currentUser={props.currentUser} renderOnUpdate={props.renderOnUpdate} updateComments={this.updateComments}/>}
                            </div>
                            <div className="card-body comments-div" style={{display: "none", borderBottom:"1px solid #0062cc"}}>
                                {<Comments comments={this.props.comments} currentUser={props.currentUser} commentsNum={props.commentsNum}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

const mapStateToProps = state => {
    return ({ comments: state.currentComments })
  }

export default connect(mapStateToProps, { getCurrentComments })(Reply);