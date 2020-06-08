import React from 'react';

export default ({quiz, activeQuestion, chooseQuestion}) =>

    <ul className={'nav-list'}>
        {quiz.map((item, index) =>
            (
                <li key={index}>
                    <span
                        className={activeQuestion === index ? 'nav-list-active' : 'nav-list-inactive'}
                        onClick={(e) => {chooseQuestion(Number(e.target.innerText) - 1)}}

                    >{item.id + 1}
                    </span>
                    <span className={'question-status'}
                          style={item.selectedAnswer === null ? {'backgroundColor':'red'} : {'backgroundColor':'lime'}}
                    > </span>
                </li>
            )
        )}
    </ul>;