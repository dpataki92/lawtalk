import React from 'react';

class Reply extends React.Component {

    handleVoting = (e) => {
        let id = e.target.parentNode.parentNode.parentNode.id
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
            document.getElementById("upvote").style.visibility = "hidden";
            document.getElementById("downvote").style.visibility = "hidden";
            document.getElementById("upvoteNum").innerText = `${json.answerUpvotes} upvotes`
            document.getElementById("downvoteNum").innerText = `${json.answerDownvotes} downvotes`
        })   
    }

    render() {
        const props = this.props
    return(
        
        <div className="container-fluid mt-100" style={{width: "80%"}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4">
                        <div className="card-header">
                            <div className="media flex-wrap w-100 align-items-center">
                                <div className="media-body ml-3"> <a href="javascript:void(0)" data-abc="true">{props.answerCreator}</a>
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
                            <a style={{cursor: "pointer"}} id="upvote" onClick={this.handleVoting}> <i className="fa fa-arrow-up text-success" style={{fontSize: "1.3em"}}></i> </a>  <span id="upvoteNum" style={{opacity: "0.5"}} >{props.upvotes} upvotes</span> 
                            <a style={{cursor: "pointer"}} id="downvote" onClick={this.handleVoting}> <i className="fa fa-arrow-down text-danger" style={{fontSize: "1.3em"}}></i> </a>  <span id="downvoteNum" style={{opacity: "0.5"}}>{props.downvotes} downvotes</span> 
                            </div>
                            <div className="px-4 pt-3"> <button type="button" className="btn btn-primary"><i className="ion ion-md-create"></i>&nbsp; Reply</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default Reply;