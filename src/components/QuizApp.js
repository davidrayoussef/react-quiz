import React from 'react';

class QuizApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // questions: this.shuffleQuestions(questions),
      userAnswers: [],
      step: 0
    };

  }

  nextStep() {
    this.setState({
      step: this.state.step++
    });
  }

  handleAnswerClick(e) {
    console.table(e);
    // if question is right,
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
    return (
      <div className="questions">
        <h1>JavaScript Quiz</h1>
        <QuestionList
          questions={this.props.questions}
          handleAnswerClick={this.handleAnswerClick}
        />
      </div>
    );
  }
}

class QuestionList extends React.Component {
  render() {
    return (
      <div className="question-list">
        { this.props.questions.map((question, index) => {
          return (
            <Question
              key={question.id}
              index={question.id}
              question={question.question}
              answers={question.answers}
              handleAnswerClick={this.props.handleAnswerClick}
            />
          );
        })}
      </div>
    );
  }
}

class Question extends React.Component {
  render() {
    let { id, question, answers, handleAnswerClick } = this.props;
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

class Answer extends React.Component {
  render() {
  let { answer, handleAnswerClick } = this.props;
    return (
      <li className="question-answer" onClick={handleAnswerClick}>
        {answer}
      </li>
    );
  }
}

export default QuizApp;
