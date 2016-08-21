import React from 'react';

const Answer = ({ answer, handleAnswerClick }) => {
  return (
    <li
      className="question-answer"
      onClick={handleAnswerClick}>
        {answer}
    </li>
  );
}

export default Answer;
