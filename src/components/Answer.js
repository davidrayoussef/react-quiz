import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answer, handleAnswerClick, handleEnterPress }) => {
  return (
    <li
      className="question-answer"
      tabIndex="0"
      onClick={handleAnswerClick}
      onKeyDown={handleEnterPress}
    >
      {answer}
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.element.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired
};

export default Answer;
