import React, { Component} from 'react';
import PropTypes from 'prop-types';

import QuestionList from './QuestionList';

class Quiz extends Component {
    render() {
        return (
            <div className="wrapper">
                <header>
                    <div className="question-count">
                        <h2>Question</h2>
                        <div className="question-number">
                            {this.props.step}
                            </div>
                        <div className="description">
                            of
                            <span className="total-question-number">
                                {this.props.totalQuestions}
                            </span>
                        </div>
                    </div>
                    <h1>JavaScript Quiz</h1>
                    <div className="score-container">
                        <h2>Score</h2>
                        <div className="score">
                            {this.props.score}
                        </div>
                        <div className="description">points</div>
                    </div>
                </header>
                <div className="correct-modal">
                    <div className="praise">Correct!</div>
                    <div className="bonus"/>
                </div>
                <div className="questions">
                    <QuestionList
                        questions={this.props.questions}
                        handleAnswerClick={this.props.handleAnswerClick}
                    />
                </div>
            </div>
        );
    }
}

Component.propTypes = {
    step: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    handleAnswerClick: PropTypes.func.isRequired
};

export default Quiz;
