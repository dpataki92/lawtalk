import React from 'react';
import { Link } from 'react-router-dom';


class QuestionRow extends React.Component {

    userConnection = () => {
        if (this.props.creator === this.props.currentUser) {
            return ["created", "success"]
        } else if (this.props.followersNames.includes(`${this.props.currentUser}, `) || this.props.followersNames.slice(-this.props.currentUser.length) === this.props.currentUser) {
            return ["followed", "danger"]
        } else {
            return ["",""]
        }
    }

    render() {
        const props = this.props
        return(
            <div className="card-body py-3">
                <div className="row no-gutters align-items-center">
                    <div className="col"> <Link to={`/questions/${props.questionId}`} className="text-big" data-abc="true">{props.title}</Link> <span className={`badge badge-${this.userConnection()[1]} align-text-bottom ml-1`}>{this.userConnection()[0]}</span>
                        <div className="text-muted small mt-1" >{`${props.jurisdiction},`} {props.field} &nbsp;·&nbsp; <Link to={`/users/${props.id}`} className="text-muted" data-abc="true">{props.creator}</Link> &nbsp;·&nbsp; {props.followersNames.split(',').length} followers</div>
                    </div>
                    <div className="d-none d-md-block col-4">
                        <div className="row no-gutters align-items-center">
                        <div className="col-4" style={{paddingLeft: 22}}>{props.replies}</div>
                            <div className="media col-8 align-items-center"> <img src={`/${props.lastRespondentAvatar}`} alt="last respondent's profile picture" className="d-block ui-w-30 rounded-circle" style={{width: "70px", height: "80px"}}/>
                                <div className="media-body flex-truncate ml-2">
                                <div className="line-height-1 text-truncate">{props.lastResponseDate}</div> {props.lastRespondent === "-" ? "-" : <Link to={`/users/${props.lastRespondentId}`} className="text-muted small text-truncate" data-abc="true">{props.lastRespondent}</Link>} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionRow;