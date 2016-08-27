import React, { PropTypes } from 'react';
import Answer from './Answer';

const Question = ({ question, answers, handleAnswerClick }) => {
  return (
    <li className="question">
      <h2 className="question-title">
        {question}
      </h2>
      <ol className="question-answers">
        {answers.map(answer => {
          return (
            <Answer
              key={answer}
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
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Question;
