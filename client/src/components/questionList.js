import React, { Component } from 'react';
import QuestionRow from './questionRow.js';

class QuestionList extends Component {

        render() {

            const questions = this.props.questions.map((question, id)=> {
                return <QuestionRow
                          key={id} 
                          title={question.title}
                          replies={question.replies.length} 
                          lastRespondent= {this.props.lastRespondent} 
                          lastResponseDate= {this.props.lastResponseDate} 
                        />
            })
        }   
            
        return()
                
}