import React, { Component } from 'react';
import QuestionRow from './questionRow.js';

class QuestionList extends Component {

        render() {
            console.log(this.props.questions)
            const questions = this.props.questions.map((question, id)=> {
                if (id < 1) {
                    return <QuestionRow
                          key={id} 
                          title={question.title}
                          jurisdiction={question.jurisdiction}
                          field={question.field}
                          creator={question.creator}
                          replies={question.replies} 
                          lastRespondent= {question.lastRespondent} 
                          lastResponseDate= {question.lastResponseDate}
                          lastRespondentAvatar={question.lastRespondentAvatar}
                        />
                } else {
                    return (
                        <React.Fragment>
                            <hr className="m-0"/>
                            <QuestionRow
                          key={id} 
                          title={question.title}
                          jurisdiction={question.jurisdiction}
                          field={question.field}
                          creator={question.creator}
                          replies={question.replies} 
                          lastRespondent= {question.lastRespondent} 
                          lastResponseDate= {question.lastResponseDate}
                          lastRespondentAvatar={question.lastRespondentAvatar}
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