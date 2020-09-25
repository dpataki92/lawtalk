import React, { Component } from 'react';
import MainPost from './mainPost.js';
import Replies from './replies.js';
import { connect } from 'react-redux';
import { getCurrentThread } from '../actions/currentThread';

class Thread extends Component {
    constructor(props) {
        super(props);
        props.getCurrentThread(props.match.params.id);
    }

    render(){

        const questionData  = this.props.currentThread
        const {answerData} = this.props.currentThread

        return(
            <React.Fragment>
                <MainPost title={questionData.title} content={questionData.content} jurisdiction={questionData.jurisdiction} field={questionData.field} creatorAvatar={questionData.creatorAvatar} creator={questionData.creator} creatorId={questionData.creatorId} creation={questionData.creation} replies={questionData.replies}/>
            </React.Fragment>
        )
    }

}

 //   <Replies replies={answerData}/>

const mapStateToProps = state => {
    return ({ currentThread: state.currentThread })
  }

export default connect(mapStateToProps, { getCurrentThread })(Thread);