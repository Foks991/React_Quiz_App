import React from 'react'
import { connect } from "react-redux";
import {
  getQuizIsDone,
  getSelectedQuizQuestions
} from "../../../store/rootReducer";

const Result = ({selectedQuizQuestions, quizIsDone}) => {

  const answers = [];
  selectedQuizQuestions.map(item => {
    answers.push(item.correctAnswers.find(element => element === item.selectedAnswer));
  });
  const summaryQuestionCount = answers.length;
  const correctAnswersCount = answers.filter(item => item !== undefined);
  const percent = (correctAnswersCount.length * 100) / summaryQuestionCount;

  return (
    <>
      {quizIsDone ?
        <div className={'result-modal'}>
          <p>{Math.round(percent)}%</p>
          <p>Правильных ответов: {correctAnswersCount.length}/{summaryQuestionCount}</p>
        </div>
        : null}
    </>
  )
};

const mapStateToProps = (state) => ({
  quizIsDone: getQuizIsDone(state),
  selectedQuizQuestions: getSelectedQuizQuestions(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
