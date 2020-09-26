import React, { Component } from 'react';
import ReplyForm from './replyForm.js';
import EditButton from './editButton.js'; 
import DeleteButton from './deleteButton.js'; 

const MainPost = props => {
    const handleReplyForm = (e) => {
        let replyFormDiv = e.target.parentNode.parentNode.parentNode.querySelector(".reply-form")
        if (replyFormDiv.style.display === "none") {
            replyFormDiv.style.display = "block";
        } else {
            replyFormDiv.style.display = "none"
        }
    }

    return(
        <div className="container-fluid mt-100" style={{width: "80%"}}>
        <div className="row">
            <div className="col-md-12">
            <button type="button" style={{marginBottom: "5px"}} className="btn btn-success"><i class="ion ion-md-create"></i>&nbsp; + Follow thread</button>
            <h4 style={{marginBottom: "5px"}}>{props.title}</h4>
                <div className="card mb-4">
                    <div className="card-header">
                        <div className="media flex-wrap w-100 align-items-center"> <div style={{height: "100px", overflow: "hidden"}}><img src={`/${props.creatorAvatar}`} className="d-block ui-w-40 rounded-circle" style={{height: "100px", objectFit: "cover"}} alt=""/></div>
                            <div className="media-body ml-3"> <a href="javascript:void(0)" data-abc="true" style={{fontWeight:"bold"}}>{props.creator}</a>
                                <div className="text-muted small">{props.creation}</div>
                            </div>
                            <div className="text-muted small ml-3">
                                <div><strong>JURISDICTION :</strong> {props.jurisdiction}</div>
                                <div><strong>LEGAL FIELD :</strong> {props.field}</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p> {props.content}</p>
                    </div>
                    <div className="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                        <div class="px-4 pt-3"> <i class="fa fa-reply text-primary"></i>&nbsp; <span class="align-middle text-muted">{props.replies} replies</span> <span class="text-muted d-inline-flex align-items-center align-middle ml-4"> <i class="fa fa-users text-primary fsize-3"></i>&nbsp; <span class="align-middle">{props.followers} followers</span> </span> </div>
                        <div style={{display: "flex", justifyContent: "space-around"}}>
                        <div className="px-4 pt-3">{props.currentUser === props.creator ? <EditButton/> : ""}</div>
                        <div className="px-4 pt-3">{props.currentUser === props.creator ? <DeleteButton/> : ""}</div>
                        <div className="px-4 pt-3"> <button type="button" onClick={handleReplyForm} className="btn btn-primary"><i class="ion ion-md-create"></i>&nbsp; Reply</button> </div>
                        </div>
                    </div>
                    <div className="card-body reply-form" style={{display: "none"}}>
                        <div> {<ReplyForm type={"answer"} postId={props.postId} currentUser={props.currentUser}/>}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainPost;