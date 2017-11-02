import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

const Question = ({ question, answers, handleAnswerClick }) => {
  return (
    <li className="question">
      <h2 className="question-title">
        {question}
      </h2>
      <ol className="question-answers">
        {answers.map((answer, index) => {
          return (
            <Answer
              key={JSON.stringify(answer.props.children)}
              answer={answer}
              handleAnswerClick={handleAnswerClick}
            />
          );
        })}
      </ol>
    </li>
  );
}

Question.propTypes = {
  question: PropTypes.element.isRequired,
  answers: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Question;
