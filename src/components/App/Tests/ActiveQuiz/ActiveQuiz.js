import React from 'react';
import AnswerList from './AnswersList/AnswersList'
import Title from "./Title/Title";

export default ({ question, activeQuestion, quiz, quizTitle, ...rest }) => (
    <>
        <Title quizTitle={ quizTitle }/>

        <div className={'question'}>
            <div>{activeQuestion + 1}. {question}</div>
            <div>{activeQuestion + 1} из {quiz.length}</div>
        </div>

        <AnswerList
            quiz={quiz}
            activeQuestion={activeQuestion}
            {...rest}
        />
    </>
);