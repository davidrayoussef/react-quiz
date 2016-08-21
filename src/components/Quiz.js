import React from 'react';
import QuestionList from './QuestionList';

const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick }) => {
  return (
    <div className="wrapper">
      <header>
        <div className="question-count">
          <h2>Question</h2>
          <div className="question-number">{step}</div>
          <div className="description">of<span className="total-question-number">{totalQuestions}</span></div>
        </div>
        <h1>JavaScript Quiz</h1>
        <div className="score-container">
          <h2>Score</h2>
          <div className="score">{score}</div>
          <div className="description">points</div>
        </div>
      </header>
      <div className="correct-modal">
        <div className="praise">Correct!</div>
        <div className="bonus"></div>
      </div>
      <div className="questions">
        <QuestionList
          questions={questions}
          handleAnswerClick={handleAnswerClick}
          step={step}
        />
      </div>
    </div>
  );
}

export default Quiz;
