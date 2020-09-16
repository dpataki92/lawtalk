import React, { Component } from 'react';

const questionRow = props => {
    return(
        <div className="card-body py-3">
            <div className="row no-gutters align-items-center">
                <div className="col"> <a href="javascript:void(0)" className="text-big" data-abc="true">{props.question.title}</a>
                    <div className="text-muted small mt-1">Started 25 days ago &nbsp;·&nbsp; <a href="javascript:void(0)" className="text-muted" data-abc="true">Neon Mandela</a></div>
                </div>
                <div className="d-none d-md-block col-4">
                    <div className="row no-gutters align-items-center">
                        <div className="col-4">12</div>
                        <div className="media col-8 align-items-center"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg" alt="" className="d-block ui-w-30 rounded-circle"/>
                            <div className="media-body flex-truncate ml-2">
    <div className="line-height-1 text-truncate">{props.question.created_at}</div> <a href="javascript:void(0)" className="text-muted small text-truncate" data-abc="true">by {props.question.user}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}