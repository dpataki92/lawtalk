import React, { Component } from 'react';
import ReplyForm from './replyForm.js';
import EditButton from './editButton.js'; 

class MainPost extends Component {
    
    handleReplyForm = (e) => {
        console.log(this.props)
        let replyFormDiv = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".reply-form")
        if (replyFormDiv.style.display === "none") {
            replyFormDiv.style.display = "block";
        } else {
            replyFormDiv.style.display = "none"
        }
    }

    checkIfFollowed = () => {
        return this.props.followed === "true" ? "Unfollow Thread" : " + Follow Thread"
    }

    followFetch = (path) => {
        fetch(`/api/questions/${this.props.postId}/${path}`)
        .then(resp => resp.json())
        .then(json => {
            alert(json.message);
            window.location.reload();
        })
    }

    handleFollowButton = (e) => {
        if (e.target.innerText === "Unfollow Thread") {
            this.followFetch("unfollow");
            e.target.innerText = " + Follow Thread"
        } else if (e.target.innerText === " + Follow Thread") {
            this.followFetch("follow");
            e.target.innerText = "Unfollow Thread"
        }
    }

    render() {
        return(
            <div className="container-fluid mt-100" style={{width: "80%"}}>
            <div className="row">
                <div className="col-md-12">
                <button type="button" style={{marginBottom: "5px"}} className="btn btn-success"><i class="ion ion-md-create"></i>&nbsp;{this.checkIfFollowed()}</button>
                <h4 style={{marginBottom: "5px"}}>{this.props.title}</h4>
                    <div className="card mb-4">
                        <div className="card-header">
                            <div className="media flex-wrap w-100 align-items-center"> <div style={{height: "100px", overflow: "hidden"}}><img src={`/${this.props.creatorAvatar}`} className="d-block ui-w-40 rounded-circle" style={{height: "100px", objectFit: "cover"}} alt=""/></div>
                                <div className="media-body ml-3"> <a href="javascript:void(0)" data-abc="true" style={{fontWeight:"bold"}}>{this.props.creator}</a>
                                    <div className="text-muted small">{this.props.creation}</div>
                                </div>
                                <div className="text-muted small ml-3">
                                    <div><strong>JURISDICTION :</strong> {this.props.jurisdiction}</div>
                                    <div><strong>LEGAL FIELD :</strong> {this.props.field}</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <p> {this.props.content}</p>
                            <p id="update" style={{marginTop: "5px", color: "red", opacity:"0.5"}}>{this.props.creation != this.props.update ? `This question was updated on ${this.props.update}` : ""}</p>
                        </div>
                        <div className="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                            <div class="px-4 pt-3"> <i class="fa fa-reply text-primary"></i>&nbsp; <span class="align-middle text-muted">{this.props.replies} replies</span> <span class="text-muted d-inline-flex align-items-center align-middle ml-4"> <i class="fa fa-users text-primary fsize-3"></i>&nbsp; <span class="align-middle">{this.props.followers} followers</span> </span> </div>
                            <div style={{display: "flex", justifyContent: "space-around"}}>
                            <div className="px-4 pt-3"> {this.props.currentUser === this.props.creator ? <EditButton postId={this.props.postId}/> : ""} <button type="button" onClick={this.handleReplyForm} className="btn btn-primary"><i class="ion ion-md-create"></i>&nbsp; Reply</button> </div>
                            </div>
                        </div>
                        <div className="card-body reply-form" style={{display: "none"}}>
                            <div> {<ReplyForm postId={this.props.postId} type={"answer"} currentUser={this.props.currentUser}/>}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MainPost;