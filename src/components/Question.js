import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Answer from './Answer';

class Question extends Component {
    render() {
        return (
            <li className="question">
                <h2 className="question-title">
                    {this.props.question}
                </h2>
                <ol className="question-answers">
                    {this.props.answers.map(answer => {
                        return (
                            <Answer
                                key={answer}
                                answer={answer}
                                handleAnswerClick={this.props.handleAnswerClick}
                            />
                        );
                    })}
                </ol>
            </li>
        );
    }
}

Component.propTypes = {
    question: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    handleAnswerClick: PropTypes.func.isRequired
};

export default Question;
