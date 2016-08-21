import React from 'react';
import Answer from './Answer';

const Question = ({ questions, question, answers, handleAnswerClick }) => {
  return (
    <li className="question">
      <h2 className="question-title">
        {question}
      </h2>
      <ol className="question-answers">
        { answers.map((answer, index) => {
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
      </ol>
    </li>
  );
}

Question.propTypes = {

};

export default Question;
