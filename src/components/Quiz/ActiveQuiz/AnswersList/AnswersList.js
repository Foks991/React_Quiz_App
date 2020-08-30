import React from 'react';

export default ({ answers, quiz, activeQuestion, answerLabels, setSelectedAnswer }) => {

  return (
    <ul className={'answersList'}>
      {answers.map((answer, index) =>
        (
          <li
            className={quiz[activeQuestion].selectedAnswer - 1 === index ? 'answer-list-item active-item' : 'answer-list-item'}
            key={index}
            onClick={() => {
              setSelectedAnswer(quiz[activeQuestion].id, answer.id);
            }}
          >
            <span className={'answerLabel'}>{answerLabels[index]}</span>
            {answer.text}
          </li>
        )
      )}
    </ul>
  )
}