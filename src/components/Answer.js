import React, { Component} from 'react';
import PropTypes from 'prop-types';


class Answer extends Component {

    render() {
        return (
            <li
                className="question-answer"
                onClick={this.props.handleAnswerClick}>
                {this.props.answer}
            </li>
        );
    }

}

Component.propTypes = {
    answer: PropTypes.string.isRequired,
    handleAnswerClick: PropTypes.func.isRequired
};

export default Answer;
