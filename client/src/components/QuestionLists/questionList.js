import React, { Component } from 'react';
import QuestionRow from './questionRow.js';

class QuestionList extends Component {

        handleVote = (e) => {
            e.preventDefault();
            let button = e.target;
            let voteCounter = e.target.nextSibling;
            voteCounter.innerHTML === " 0" ? voteCounter.innerHTML = " 1" : voteCounter.innerHTML = " 0";
            button.innerHTML === "↑" ? button.innerHTML = "↓" : button.innerHTML = "↑";
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

            return questions
        }            
}

export default QuestionList;