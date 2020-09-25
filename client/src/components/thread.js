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
                <MainPost check={answerData} title={questionData.title} content={questionData.content} jurisdiction={questionData.jurisdiction} field={questionData.field} creatorAvatar={questionData.creatorAvatar} creator={questionData.creator} creatorId={questionData.creatorId} creation={questionData.creation} replies={questionData.replies} followers={questionData.followers}/>
                <Replies replies={answerData}/>
            </React.Fragment>
        )
    }

}

 //   <Replies replies={answerData}/>

const mapStateToProps = state => {
    return ({ currentQuestion: state.currentQuestion, currentAnswers: state.currentAnswers })
  }

export default connect(mapStateToProps, { getCurrentQuestion, getCurrentAnswers})(Thread);