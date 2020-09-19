import React, { Component } from 'react';
import QuestionRow from './questionRow.js';

class QuestionList extends Component {

        render() {

            const questions = this.props.questions.map((question, id)=> {
                if (id < 1) {
                    return <QuestionRow
                          key={id} 
                          title={question.title}
                          replies={question.replies.length} 
                          lastRespondent= {this.props.lastRespondent} 
                          lastResponseDate= {this.props.lastResponseDate} 
                        />
                } else {
                    return (
                        <React.Fragment>
                            <hr className="m-0"/>
                            <QuestionRow
                            key={id} 
                            title={question.title}
                            replies={question.replies.length} 
                            lastRespondent= {this.props.lastRespondent} 
                            lastResponseDate= {this.props.lastResponseDate} 
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