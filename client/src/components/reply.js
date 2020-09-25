import React from 'react';

const Reply = (props) => {
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
                        <div className="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                            <div className="px-4 pt-3"> <a href="javascript:void(0)" className="text-muted d-inline-flex align-items-center align-middle" data-abc="true"> 
                            <i className="fa fa-heart text-danger"></i>&nbsp; <span className="align-middle">{props.upvotes}</span> </a> <span className="text-muted d-inline-flex align-items-center align-middle ml-4"> 
                            <i className="fa fa-eye text-muted fsize-3"></i>&nbsp; <span className="align-middle">{props.downvotes}</span> 
                            <i className="fa fa-comments-o text-muted fsize-3"></i>&nbsp; <span className="align-middle">{}</span> 
                            </span> </div>
                            <div className="px-4 pt-3"> <button type="button" className="btn btn-primary"><i className="ion ion-md-create"></i>&nbsp; Reply</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reply;