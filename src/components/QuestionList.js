import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { handleAnswerClick } = this.props;
    return (
      <div className="question-list">
        { this.props.questions.map((question, index) => {
          return (
            <Question
              key={question.question}
              index={index}
              questions={this.props.questions}
              question={question.question}
              answers={question.answers}
              handleAnswerClick={handleAnswerClick}
              step={this.props.step}
            />
          );
        })}
      </div>
    );
  }
}

export default QuestionList;
