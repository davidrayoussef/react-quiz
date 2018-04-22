import React from 'react';
import { render } from 'react-dom';
import QuizApp from './components/QuizApp';
import './style.css';

render(
  <QuizApp totalQuestions={10} />,
  document.getElementById('app')
);
