import React, { Component } from 'react';
import QuestionRow from './questionRow.js';

class QuestionList extends Component {

        render() {
            let questions = this.props.questions.map((question, id)=> {
                    return (
                        <React.Fragment>
                            {id > 0 ? <hr className="m-0"/> : null}
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
                          {id === this.props.questions.length-1 ? <div style={{paddingBottom: "45px"}}><hr className="m-0" /></div> : null}
                        </React.Fragment>
                    )
            })

            return questions;
        }            
}

export default QuestionList;