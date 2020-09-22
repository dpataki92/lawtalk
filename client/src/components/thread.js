import React, { Component } from 'react';

class Thread extends Component {
    render(){
        return(
            <React.Fragment>
                <MainPost avatar={this.props.question.avatar} creation={this.props.question.creation} username={this.props.question.username} content={this.props.content} jurisdiction={this.props.question.jurisdiction}/>
                <Replies replies={this.props.question.replies}/>
            </React.Fragment>
        )
    }

}

export default Thread;