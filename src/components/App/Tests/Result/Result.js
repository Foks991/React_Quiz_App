import React from 'react'

export default function Result({ quiz, testIsDone }) {

    let answers = [];
    quiz.map(item => {
        answers.push(item.correctAnswers.find(element => element === item.selectedAnswer));
    });
    let summaryQuestionCount = answers.length;
    let correctAnswersCount = answers.filter(item => item !== undefined);
    let percent = (correctAnswersCount.length * 100) / summaryQuestionCount;


    return (
        <>
            {testIsDone ?
                <div className={'result-modal'}>
                    <p>{percent}%</p>
                    <p>Правильных ответов: {correctAnswersCount.length}/{summaryQuestionCount}</p>
                </div>
                : null}
        </>
    )
}


