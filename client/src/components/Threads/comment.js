import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './deleteButton.js';


const Comment = (props) => {

    const handleVoting = (e) => {
        let id = props.commentId;
        let commentDiv = e.target.parentNode.parentNode;
        fetch(`/api/comments/${id}/vote`, {
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
                commentDiv.querySelector("#upvote").style.opacity = "0.5";
                commentDiv.querySelector("#downvote").style.opacity = "0.5";
                commentDiv.querySelector("#upvoteNum").innerText = `${json.commentUpvotes} upvotes`
                commentDiv.querySelector("#downvoteNum").innerText = `${json.commentDownvotes} downvotes`
            }
        })   
    }

    return(
        <div id={props.commentId} className="justify-content-between px-0 pt-0 pb-3">
            {props.first ? <h5 className="reply_count_header">{props.commentsNum} comments</h5> : null}

            <p><Link to={`/users/${props.commentCreatorId}`}>{props.commentCreator}</Link></p> 
            <p style={{opacity: "0.5"}}>{props.creation}</p><br/>
            <p>{props.content}</p><br/>

            <Link to=" " style={{cursor: "pointer"}} id="upvote"> <i className="fa fa-arrow-up text-success" onClick={handleVoting} style={{fontSize: "1.3em"}}></i> </Link>  <span id="upvoteNum" style={{opacity: "0.5", marginRight:"5px"}} >{props.upvotes} upvotes</span> 
            <Link to=" " style={{cursor: "pointer"}} id="downvote"> <i className="fa fa-arrow-down text-danger" onClick={handleVoting} style={{fontSize: "1.3em"}}></i> </Link>  <span id="downvoteNum" style={{opacity: "0.5", marginRight:"5px"}}>{props.downvotes} downvotes</span>
            {props.commentCreator === props.currentUser ? <DeleteButton postId={props.commentId} type={"comment"} style={{display: 'inline'}}/> : ""}
            
            <hr className="m-0"/><br/>
        </div>
    )
}

export default Comment;