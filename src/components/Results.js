import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // let { questions, question, answers, handleAnswerClick } = this.props;
    return (
      <div className="results-container">
        <div>You answered (number) on the first try.</div>
        <div>You answered (number) on the second try.</div>
        <div>You answered (number) on the third try.</div>
        <div>Your Total Score is </div>
      </div>
    );
  }
}

Results.propTypes = {

};

export default Results;
