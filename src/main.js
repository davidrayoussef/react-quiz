import React from 'react';
import ReactDOM from 'react-dom';
import {questions} from './quiz-data';

class QuizApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questions,
      userAnswers: [],
      step: 0
    };
  }

  nextStep() {
    this.setState({
      step: this.state.step++
    });
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

  countScore() {
    let score = 0;

    Object.keys(this.state.questions).map((question, index) => {
      if (this.isCorrect(index)) {
        score += 1;
      }
    });

    return score;
  }

  render() {
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    return (
      <div className="questions">
        <h1>JavaScript Quiz</h1>
        <QuestionList questions={this.props.questions} />
      </div>
    );
  }
}

class QuestionList extends React.Component {
  render() {
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    return (
      <div className="question-list">
        { this.props.questions.map((question, index) => {
          return (
            <Question 
            key={question.id} 
            index={question.id}
            question={question.question}
            answers={question.answers}
            />
          );
        })}
      </div>
    );
  }
}

class Question extends React.Component {
  render() {
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    let { id, question, answers } = this.props; 
    return (
      <li id={id} className="question">
        <h2 className="question-title">
          {question}
        </h2>
        <ul className="question-answers">
          <li className="question-answer">
            {answers[0]}
          </li>
          <li className="question-answer">
            {answers[1]}
          </li>
          <li className="question-answer">
            {answers[2]}
          </li>
          <li className="question-answer">
            {answers[3]}
          </li>                              
        </ul>
      </li>
    );
  }
}

ReactDOM.render(
  <QuizApp questions={questions} />,
  document.getElementById("app")
);