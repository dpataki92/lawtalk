import React, { Component } from 'react';
import QuestionRow from './questionRow.js';

class QuestionList extends Component {

        render() {
            const questions = this.props.questions.map((question, id)=> {
                if (id < 1) {
                    return <QuestionRow
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
                } else {
                    return (
                        <React.Fragment>
                            <hr className="m-0"/>
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
                }
            })

        return(<React.Fragment>
                    {questions}
               </React.Fragment>)
        }            
}

export default QuestionList;