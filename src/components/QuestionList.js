import React from 'react';
import Question from './Question';

const QuestionList = ({ questions, step, handleAnswerClick }) => {
  return (
    <div className="question-list">
      { questions.map((question, index) => {
        return (
          <Question
            key={question.question}
            index={index}
            questions={questions}
            question={question.question}
            answers={question.answers}
            step={step}
            handleAnswerClick={handleAnswerClick}
          />
        );
      })}
    </div>
  );
}

export default QuestionList;
