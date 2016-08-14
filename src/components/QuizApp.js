import React, { Component } from 'react';
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
    return (
      <div className="wrapper">
        <header>
          <div className="question-count">
            <h2>Question <span className="question-number">{this.state.step + 1}</span> of<span className="total-question-number">{this.state.totalQuestions}</span>
            </h2>
          </div>
          <h1>JavaScript Quiz</h1>
          <div className="score-container">
            <h2>Score</h2>
            <div className="score">{this.state.score}</div>
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
  }
}

class QuestionList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { handleAnswerClick } = this.props;
    return (
      <div className="question-list">
        { this.props.questions.map((question, index) => {
          return (
            <Question
              key={question.question}
              index={index}
              questions={this.props.questions}
              question={question.question}
              answers={question.answers}
              handleAnswerClick={handleAnswerClick}
              step={this.props.step}
            />
          );
        })}
      </div>
    );
  }
}

class Question extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { question, answers, handleAnswerClick} = this.props;
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
                questions={this.props.questions}
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

class Answer extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let { answer, handleAnswerClick } = this.props;
    return (
      <li
        questions={this.props.questions}
        className="question-answer"
        onClick={handleAnswerClick}>
          {answer}
      </li>
    );
  }
}

export default QuizApp;
