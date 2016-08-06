import React, { Component } from 'react';

class QuizApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.questions,
      userAnswers: [],
      step: 0,
      score: 0
    };

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1,
      score: this.state.score + 1
    });
  }

  handleAnswerClick(e) {
    let isCorrect = this.state.questions[this.state.step].answers[this.state.questions[this.state.step].correct] === e.target.innerText;
    if (isCorrect) {
      e.target.style.borderColor = 'rgba(135,211,124,.5)';
      this.nextStep();
    } else {
      e.target.style.borderColor = 'rgba(236,100,75,.5)';
    }
  }

  setAnswer(event) {
    // this.state.userAnswers[this.state.step] = this.state.userAnswers[this.state.step] || [];
    this.state.userAnswers[this.state.step][event.target.value] = event.target.checked;
  }

  isCorrect(index) {
    let result = true;

    Object.keys(this.state.questions[index].answers).map((answer, answerIndex) => {
      if (!this.state.userAnswers[index] || answer.isRight != this.state.userAnswers[index][value]) {
        result = false;
      }
    });

    return result;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="questions">
          <h1>JavaScript Quiz</h1>
          <QuestionList
            questions={this.state.questions}
            handleAnswerClick={this.handleAnswerClick}
          />
        </div>
        <div className="score-container">
          <h2>Current Score</h2>
          <div className="score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}

class QuestionList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions
    };
  }
  render() {
    let { handleAnswerClick } = this.props;
    return (
      <div className="question-list">
        { this.state.questions.map((question, index) => {
          return (
            <Question
              key={question.id}
              index={question.id}
              questions={this.state.questions}
              question={question.question}
              answers={question.answers}
              handleAnswerClick={handleAnswerClick}
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

    this.state = {
      questions: this.props.questions
    };
  }
  render() {
    let { id, question, answers, handleAnswerClick} = this.props;
    return (
      <li id={id} className="question">
        <h2 className="question-title">
          {question}
        </h2>
        <ul className="question-answers">
          { this.props.answers.map((answer, index) => {
            return (
              <Answer
                key={index}
                index={index}
                questions={this.state.questions}
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
  setAnswer: React.PropTypes.func
};

class Answer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.questions
    }
  }
  render() {
    let { answer, handleAnswerClick } = this.props;
    let { questions } = this.state;
    return (
      <li
        questions={questions}
        className="question-answer"
        onClick={handleAnswerClick}>
          {answer}
      </li>
    );
  }
}

export default QuizApp;
