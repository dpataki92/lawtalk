import React from 'react';
import { Link } from 'react-router-dom';


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
            commentDiv.querySelector("#upvote").style.visibility = "hidden";
            commentDiv.querySelector("#downvote").style.visibility = "hidden";
            commentDiv.querySelector("#upvoteNum").innerText = `${json.commentUpvotes} upvotes`
            commentDiv.querySelector("#downvoteNum").innerText = `${json.commentDownvotes} downvotes`
        })   
    }

    return(
        <div id={props.commentId}>
            <p><Link to={`/users/${props.commentCreatorId}`}>{props.commentCreator}</Link></p> 
            <p style={{opacity: "0.5"}}>{props.creation}</p><br/>
            <p>{props.content}</p><br/>
            <Link to=" " style={{cursor: "pointer"}} id="upvote"> <i className="fa fa-arrow-up text-success" style={{fontSize: "1.3em"}}></i> </Link>  <span id="upvoteNum" style={{opacity: "0.5", marginRight:"5px"}} >{props.upvotes} upvotes</span> 
            <Link to=" " style={{cursor: "pointer"}} id="downvote"> <i className="fa fa-arrow-down text-danger" style={{fontSize: "1.3em"}}></i> </Link>  <span id="downvoteNum" style={{opacity: "0.5", marginRight:"5px"}}>{props.downvotes} downvotes</span>
            <hr className="m-0"/><br/>
        </div>
    )
}

export default Comment;