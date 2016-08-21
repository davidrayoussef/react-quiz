import React from 'react';
import tally from '../helpers/tally';

const Results = ({ userAnswers, score, restartQuiz }) => {
  let triesTotal = tally(userAnswers);
  let oneTries = triesTotal[1] ? <div><strong>{triesTotal[1]}</strong> on the first try.</div> : null;
  let twoTries = triesTotal[2] ? <div><strong>{triesTotal[2]}</strong> on the second try.</div> : null;
  let threeTries = triesTotal[3] ? <div><strong>{triesTotal[3]}</strong> on the third try.</div> : null;
  let fourTries = triesTotal[4] ? <div><strong>{triesTotal[4]}</strong> on the fourth try.</div> : null;
  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <div>You answered...</div>
      {oneTries}
      {twoTries}
      {threeTries}
      {fourTries}
      <div className="results-total">Your Total Score is <strong>{score}</strong>.</div>
      <a onClick={restartQuiz}>Restart Quiz</a>
    </div>
  );
}

Results.propTypes = {

};

export default Results;
