import React, { useState } from 'react';

import Title from "./ActiveQuiz/Title/Title";
import ActiveQuiz from "./ActiveQuiz/ActiveQuiz";
import Buttons from "./ActiveQuiz/Buttons/Buttons";

import Navigation from "./Navigation/Navigation";
import Result from "./Result/Result";

import {quizz} from "./data";

export default (/*{ quizz }*/) => {
    /*const { data, id } = quizz;*/
    const quizId = 'reactQuiz';

    const [testIsDone, setTestIsDone] = useState(false);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answerLabels, setAnswerLabels] = useState(['A', 'B', 'C', 'D']);
    const [quizTitle, setQuizTitle] = useState('React Quiz');
    const [quiz, setQuiz] = useState([...quizz[quizId]]);
    const [answers, setAnswers] = useState(quiz.map(item => item.selectedAnswer));



    const prevQuestion = () => {
        if (!(activeQuestion === 0)) {
            setActiveQuestion(activeQuestion - 1);
        }
    };

    const nextQuestion = () => {
        if (!(activeQuestion === quiz.length - 1)) {
            setActiveQuestion(activeQuestion + 1);
        }
    };

    const chooseQuestion = (questionNumber) => {
        setActiveQuestion(questionNumber);
    };

    const finishTest = () => {
        setTestIsDone(true)
    };

    const checkAllAnswers = () => {
        const unAnsweredArr = quiz.filter(item => item.selectedAnswer === null);
        return unAnsweredArr.length
    };

    const setSelectedAnswer = (questionIndex, questionId) => {
        const newQuiz = [...quiz];
        const newQuestionState = quiz[questionIndex];
        newQuiz[questionIndex] = newQuestionState;
        newQuestionState.selectedAnswer = questionId;
        setQuiz(newQuiz);
    };

    const testBtn = () => {
        const arr = quiz.map(item => {
            item.selectedAnswer = 1;
        });
        setAnswers(arr);
    };

    return(
        <>
            <div className={'tests'}>

             {quiz.map(item => {
                    const {answers, selectedAnswer, question, id} = item;

                    return (
                        id === activeQuestion &&
                        <ActiveQuiz
                            key={ id }
                            quiz={ quiz }
                            answers={ answers }
                            question={ question }
                            quizTitle={ quizTitle }
                            answerLabels={ answerLabels }
                            selectedAnswer={ selectedAnswer }
                            activeQuestion={ activeQuestion }
                            setSelectedAnswer={ setSelectedAnswer }
                        />)
                })}

                 <Buttons
                     testBtn={testBtn}
                     finishTest={ finishTest }
                     nextQuestion={ nextQuestion }
                     prevQuestion={ prevQuestion }
                     checkAllAnswers={ checkAllAnswers }
                />
                 <Result
                    quiz={ quiz }
                    testIsDone={ testIsDone }
                />
            </div>

            <div className={'navigation'}>
                <Navigation
                    quiz={ quiz }
                    activeQuestion={ activeQuestion }
                    chooseQuestion={ chooseQuestion }
                />
            </div>
        </>
    )

}