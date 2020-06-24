import React, { useState, useEffect } from 'react';

import Result from "./Result/Result";
import Buttons from "./ActiveQuiz/Buttons/Buttons";
import ActiveQuiz from "./ActiveQuiz/ActiveQuiz";
import Navigation from "./Navigation/Navigation";

import {connect} from "react-redux";
import {getQuiz} from "../../store/reducers/quizReducer";
import {getSelectedTestFromStorage} from "../../sessionStorage/sessionStorage";
import {quizActions} from '../../store/actions/quizActions'

const Quiz = ({tests, setSelectedTest}) => {
    useEffect(() => {
        setSelectedTest(getSelectedTestFromStorage())
    }, []);
    const [quiz, setQuiz] = useState([...tests]);

    const [testIsDone, setTestIsDone] = useState(false);
    const [answerLabels, setAnswerLabels] = useState(['A', 'B', 'C', 'D']);
    const [activeQuestion, setActiveQuestion] = useState(0);
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

    const fastFinishTest = () => {
        const arr = quiz.map(item => {
            item.selectedAnswer = 1;
        });
        setAnswers(arr);
    };

    return(
        <div className={'QuizContainer'}>
            <div className={'activeTests'}>

                {quiz.map(item => {
                    const {answers, selectedAnswer, question, id} = item;

                    return (
                        id === activeQuestion &&
                        <ActiveQuiz
                            key={ id }
                            quiz={ quiz }
                            answers={ answers }
                            question={ question }
                            answerLabels={ answerLabels }
                            selectedAnswer={ selectedAnswer }
                            activeQuestion={ activeQuestion }
                            setSelectedAnswer={ setSelectedAnswer }
                        />)
                })}

                <Buttons
                    finishTest={ finishTest }
                    nextQuestion={ nextQuestion }
                    prevQuestion={ prevQuestion }
                    fastFinishTest={fastFinishTest}
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
        </div>
    )
};



const mapStateToProps = (state) => {
    return {
        tests: getQuiz(state)[getSelectedTestFromStorage()].tests
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
      setSelectedTest: (test) => dispatch(quizActions.setSelectedTest(test))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);