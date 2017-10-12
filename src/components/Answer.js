import React, { PropTypes } from 'react';

const Answer = ({ answer, handleAnswerClick }) => {
  return (
    <li
      className="question-answer"
      onClick={handleAnswerClick}>
        {answer}
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.element.isRequired,
  handleAnswerClick: PropTypes.func.isRequired
};

export default Answer;
