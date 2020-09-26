import React, { Component } from 'react';
import MainPost from './mainPost.js';
import Replies from './replies.js';
import { connect } from 'react-redux';
import { getCurrentQuestion } from '../actions/currentQuestion.js';
import { getCurrentAnswers} from '../actions/currentAnswers.js';

class Thread extends Component {
    constructor(props) {
        super(props);
        props.getCurrentQuestion(props.match.params.id);
        props.getCurrentAnswers(props.match.params.id);
    }

    render(){

        const questionData  = this.props.currentQuestion
        const answerData  = this.props.currentAnswers

        return(
            <React.Fragment>
                <MainPost postId={`${questionData.id}`} title={questionData.title} content={questionData.content} jurisdiction={questionData.jurisdiction} field={questionData.field} creatorAvatar={questionData.creatorAvatar} creator={questionData.creator} creatorId={questionData.creatorId} creation={questionData.creation} replies={questionData.replies} followers={questionData.followers} currentUser={this.props.currentUser.username} followersNames={questionData.followersNames}/>
                <Replies replies={answerData} currentUser={this.props.currentUser.username}/>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return ({ currentQuestion: state.currentQuestion, currentAnswers: state.currentAnswers, currentUser: state.currentUser })
  }

export default connect(mapStateToProps, { getCurrentQuestion, getCurrentAnswers})(Thread);