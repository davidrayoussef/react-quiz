import React from 'react';
import { render } from 'react-dom';
import shuffleQuestions from './helpers/shuffleQuestions';
import { questions } from './data/quiz-data';
import QuizApp from './components/QuizApp';

const QUESTIONS = shuffleQuestions(questions);

render(
  <QuizApp questions={QUESTIONS} />,
  document.getElementById("app")
);
