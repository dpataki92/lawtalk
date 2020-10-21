import React, { Component } from 'react';
import QuestionRow from './questionRow.js';

class QuestionList extends Component {

        render() {
            let questions;
            if (this.props.ordered === true) {questions = this.props.questions.slice().sort((a,b) => b.replies - a.replies)}
            else {questions = this.props.questions}
            return questions.map((question, id)=> {
                    return (
                        <React.Fragment>
                            {id > 1 ? <hr className="m-0"/> : null}
                            <QuestionRow
                          key={id}
                          questionId={question.id}
                          id={question.creatorId}
                          title={question.title}
                          jurisdiction={question.jurisdiction}
                          field={question.field}
                          creator={question.creator}
                          replies={question.replies} 
                          lastRespondent= {question.lastRespondent} 
                          lastResponseDate= {question.lastResponseDate}
                          lastRespondentAvatar={question.lastRespondentAvatar}
                          lastRespondentId={question.lastRespondentId}
                          currentUser={this.props.currentUser}
                          followersNames={question.followersNames}
                            />
                        </React.Fragment>
                    )
            })
        }            
}

export default QuestionList;