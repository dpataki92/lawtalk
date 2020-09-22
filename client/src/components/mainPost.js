import React, { Component } from 'react';

const MainPost = props => {
    return(
        <div className="container-fluid mt-100">
        <div className="row">
            <div className="col-md-12">
                <div className="card mb-4">
                    <h2 style={{display: "inline"}}>{props.title}</h2> <button type="button" className="btn btn-success"><i class="ion ion-md-create"></i>&nbsp; Follow</button>
                    <div className="card-header">
                        <div className="media flex-wrap w-100 align-items-center"> <img src={props.avatar} className="d-block ui-w-40 rounded-circle" alt=""/>
                            <div className="media-body ml-3"> <a href="javascript:void(0)" data-abc="true">{props.username}</a>
                                <div className="text-muted small">{props.creation}</div>
                            </div>
                            <div className="text-muted small ml-3">
                                <div><strong>JURISDICTION</strong> {props.jurisdiction}</div>
                                <div><strong>LEGAL FIELD</strong> {props.field}</div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p> {props.content}
                        </p>
                    </div>
                    <div className="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                        <div className="px-4 pt-3"> <button type="button" className="btn btn-primary"><i class="ion ion-md-create"></i>&nbsp; Reply</button> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainPost;