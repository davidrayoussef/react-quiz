import React, { Component } from 'react';

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

export default Answer;
