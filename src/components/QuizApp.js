import React, { Component } from 'react';
import { render } from 'react-dom';
import Quiz from './Quiz';
import QuestionList from './QuestionList';
import Results from './Results';
import shuffleQuestions from '../helpers/shuffleQuestions';
import { questions } from '../data/quiz-data';

const QUESTIONS = shuffleQuestions(questions);

class QuizApp extends Component {
  constructor(props) {
    super();

    this.state = {
      questions: QUESTIONS,
      userAnswers: QUESTIONS.map(question => {
        return {
          tries: 0
        }
      }),
      step: 1,
      score: 0,
      totalQuestions: QUESTIONS.length
    };

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.nextStep = this.nextStep.bind(this);
    // this.renderQuiz = this.renderQuiz.bind(this);
  }

  handleAnswerClick(e) {
    let { questions, step, userAnswers } = this.state;
    let isCorrect = questions[0].answers[questions[0].correct] === e.target.innerText;
    let answersFromUser = userAnswers.slice();
    let currentStep = step - 1;
    let tries = answersFromUser[currentStep].tries;

    if (isCorrect) {

      document.querySelector('.question:first-child').style.pointerEvents = 'none';

      e.target.classList.add('right');

      answersFromUser[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: answersFromUser
      });

      setTimeout(() => {
        let praise = document.querySelector('.praise');
        let bonus = document.querySelector('.bonus');

        if (tries === 0) {
          praise.textContent = '1st Try!';
          bonus.textContent = '+10';
        }
        if (tries === 1) {
          praise.textContent = '2nd Try!';
          bonus.textContent = '+5';
        }
        if (tries === 2) {
          praise.textContent = 'Correct!';
          bonus.textContent = '+2';
        }
        if (tries === 3) {
          praise.textContent = 'Correct!';
          bonus.textContent = '+1';
        }

        document.querySelector('.correct-modal').classList.add('shrink');
        document.querySelector('.bonus').classList.add('show');

      }, 750);

      setTimeout(this.nextStep, 2750);

    } else {

      e.target.style.pointerEvents = 'none';
      e.target.classList.add('wrong');

      answersFromUser[currentStep] = {
        tries: tries + 1
      };

      this.setState({
        userAnswers: answersFromUser
      });

    }
  }

  nextStep() {
    document.querySelector('.correct-modal').classList.remove('shrink');
    document.querySelector('.bonus').classList.remove('show');
    let { questions, userAnswers, step, score } = this.state;
    let restOfQuestions = questions.slice(1);
    let currentStep = step - 1;
    let tries = userAnswers[currentStep].tries;

    this.setState({
      step: step + 1,
      score: (() => {
        if (tries === 1) return score + 10;
        if (tries === 2) return score + 5;
        if (tries === 3) return score + 2;
        return score + 1;
      })(),
      questions: restOfQuestions
    });
  }

  restartQuiz() {
    window.location.reload();
  }

  render() {
    let { step, questions, totalQuestions, userAnswers, score, handleAnswerClick } = this.state;
    return (
      <div>
        {(() => {
          if (step >= totalQuestions + 1) {
            return (
              <Results
                score={score}
                restartQuiz={this.restartQuiz}
                userAnswers={userAnswers}
              />
            );
          } else return (
            <Quiz
              step={step}
              questions={questions}
              totalQuestions={totalQuestions}
              score={score}
              handleAnswerClick={this.handleAnswerClick}
            />
          );
        })()}
      </div>
    );
  }
}

export default QuizApp;
