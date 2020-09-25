import React from 'react';

const QuestionRow = props => {
    return(
        <div className="card-body py-3">
            <div className="row no-gutters align-items-center">
    <div className="col"> <a href="javascript:void(0)" className="text-big" data-abc="true">{props.title}</a> <span class={`badge badge-${props.badge == "Created" ? "success" : "danger"} align-text-bottom ml-1`}>{props.badge}</span>
    <div className="text-muted small mt-1">{`${props.jurisdiction},`} {props.field} &nbsp;·&nbsp; <a href="javascript:void(0)" className="text-muted" data-abc="true">{props.creator}</a></div>
                </div>
                <div className="d-none d-md-block col-4">
                    <div className="row no-gutters align-items-center">
                    <div className="col-4">{props.replies}</div>
                        <div className="media col-8 align-items-center"> <img src={`/${props.lastRespondentAvatar}`} alt="last respondent's profile picture" className="d-block ui-w-30 rounded-circle" style={{width: "70px", height: "80px"}}/>
                            <div className="media-body flex-truncate ml-2">
    <div className="line-height-1 text-truncate">{props.lastResponseDate}</div> <a href="javascript:void(0)" className="text-muted small text-truncate" data-abc="true">by {props.lastRespondent}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionRow;