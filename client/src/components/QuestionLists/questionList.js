import React, { Component } from 'react';
import QuestionRow from './questionRow.js';

class QuestionList extends Component {

        handleVote = (e) => {
            e.preventDefault();
            let text = e.target.innerText;
            if (text === "0") {
                e.target.innerText = "1"
            } else {
                e.target.innerText = "0"
            }

        }

        render() {
            const questions = this.props.questions.map((question, id)=> {
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
                          handleVote={this.handleVote}
                            />
                        </React.Fragment>
                    )
            })

        return(
            <React.Fragment>
                {questions}
            </React.Fragment>)
        }            
}

export default QuestionList;