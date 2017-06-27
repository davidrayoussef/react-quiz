import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Question from './Question';

class QuestionList extends Component{
    render(){
        return (
            <div className="question-list">
                {this.props.questions.map(question => {
                    return (
                        <Question
                            key={question.question}
                            question={question.question}
                            answers={question.answers}
                            handleAnswerClick={this.props.handleAnswerClick}
                        />
                    );
                })}
            </div>
        );
    }
}

Component.propTypes = {
  questions: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default QuestionList;
