import React, { Component} from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';

class Results extends Component {


    render() {
        const triesTotal = tally(this.props.userAnswers);
        const oneTries = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> on the first try.</div>;
        const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> on the second try.</div>;
        const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> on the third try.</div>;
        const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> on the fourth try.</div>;

        return (
            <div className="results-container">
                <h2>Quiz Results</h2>
                <div>You answered...</div>
                {oneTries}
                {twoTries}
                {threeTries}
                {fourTries}
                <div className="results-total">Your Total Score is <strong>{this.props.score}</strong>.</div>
                <a onClick={this.props.restartQuiz}>Restart Quiz</a>
            </div>
        )
    }
}

Component.propTypes = {
    userAnswers: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired,
    restartQuiz: PropTypes.func.isRequired
};

export default Results;
