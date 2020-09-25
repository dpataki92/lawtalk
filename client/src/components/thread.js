import React, { Component } from 'react';
import MainPost from './mainPost.js';
import Replies from './replies.js';
import { connect } from 'react-redux';
import { getCurrentThread } from '../actions/currentThread';

class Thread extends Component {
    render(){
        const { questionData } = this.props.currentThread
        const { answerData } = this.props.currentThread

        return(
            <React.Fragment>
                <MainPost avatar={questionData.creator.avatar} creation={questionData.created_at.slice(0, -14)} username={questionData.creator.username} content={questionData.content} jurisdiction={questionData.jurisdiction}/>
                <Replies replies={answerData}/>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return ({ currentThread: state.currentThread })
  }

export default connect(mapStateToProps, { getCurrentThread })(Thread);