import React from 'react';
import AnswerList from './AnswersList/AnswersList'
import Title from "./Title/Title";

export default ({question, activeQuestion, quiz, ...rest}) => (
  <>
    <Title/>

    <div className={'question-block'}>
      <div className={'question'}>{activeQuestion + 1}. {question}</div>
      <div className={'current-question-number'}>Question {activeQuestion + 1} of {quiz.length}</div>
    </div>

    <AnswerList
      quiz={quiz}
      activeQuestion={activeQuestion}
      {...rest}
    />
  </>
);