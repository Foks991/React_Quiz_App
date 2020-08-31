import React from 'react';
import { connect } from "react-redux";
import Title from "./Title/Title";
import AnswerList from './AnswersList/AnswersList'
import {
  getActiveQuestion,
  getSelectedQuizQuestions
} from "../../../store/rootReducer";

const ActiveQuiz = ({ question, activeQuestion, selectedQuizQuestions, answers }) =>{

  return (
  <>
    <Title/>

    <div className={'question-block'}>
      <div className={'question'}>{activeQuestion + 1}. {question}</div>
      <div className={'current-question-number'}>Question {activeQuestion + 1} of {selectedQuizQuestions.length}</div>
    </div>

    <AnswerList answers={answers}/>
  </>
)};

const mapStateToProps = (state) => ({
  activeQuestion: getActiveQuestion(state),
  selectedQuizQuestions: getSelectedQuizQuestions(state),
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveQuiz);