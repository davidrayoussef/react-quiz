import React, { Component } from 'react';
import Answer from './Answer';

class Question extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { questions, question, answers, handleAnswerClick } = this.props;
    return (
      <li className="question">
        <h2 className="question-title">
          {question}
        </h2>
        <ul className="question-answers">
          { this.props.answers.map((answer, index) => {
            return (
              <Answer
                key={index}
                index={index}
                questions={questions}
                answer={answer}
                handleAnswerClick={handleAnswerClick}
              />
            );
          })}
        </ul>
      </li>
    );
  }
}

Question.propTypes = {

};

export default Question;
