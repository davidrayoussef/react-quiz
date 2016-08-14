import React, { Component } from 'react';
import QuestionList from './QuestionList';
import Results from './Results';
import shuffleQuestions from '../helpers/shuffleQuestions';
import { questions } from '../data/quiz-data';

const QUESTIONS = shuffleQuestions(questions);

class QuizApp extends Component {
  constructor(props) {
    super();

    this.state = {
      questions: QUESTIONS,
      userAnswers: [],
      step: 0,
      score: 0,
      totalQuestions: QUESTIONS.length
    };

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.nextStep = this.nextStep.bind(this);
    // this.renderQuiz = this.renderQuiz.bind(this);
  }

  nextStep() {
    let restOfQuestions = this.state.questions.slice(1);
    this.setState({
      step: this.state.step + 1,
      score: this.state.score + 1,
      questions: restOfQuestions
    });
  }

  handleAnswerClick(e) {
    let { questions, step } = this.state;
    let isCorrect = questions[0].answers[questions[0].correct] === e.target.innerText;
    if (isCorrect) {
      e.target.style.background = 'rgba(135,211,124,.5)';
      setTimeout(this.nextStep, 2000);
    } else {
      e.target.style.background = 'rgba(236,100,75,.5)';
    }
  }

  render() {
    let displayQuiz = (
      <div className="wrapper">
        <header>
          <div className="question-count">
            <h2>Question</h2>
            <div className="question-number">{this.state.step + 1}</div>
            <div>of<span className="total-question-number">{this.state.totalQuestions}</span></div>
          </div>
          <h1>JavaScript Quiz</h1>
          <div className="score-container">
            <h2>Score</h2>
            <div className="score">{this.state.score}</div>
            <div>points</div>
          </div>
        </header>
        <div className="questions">
          <QuestionList
            questions={this.state.questions}
            handleAnswerClick={this.handleAnswerClick}
            step={this.state.step}
          />
        </div>
      </div>
    );
    return (
      <div>
        {(() => {
          if (this.state.step >= this.state.totalQuestions) {
            return <Results />;
          } else return displayQuiz;
        })()}
      </div>
    );
  }
}

export default QuizApp;
