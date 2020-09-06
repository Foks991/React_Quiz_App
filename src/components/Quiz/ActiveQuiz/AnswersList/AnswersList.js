import React from 'react';
import { connect } from "react-redux";
import { quizActions } from "../../../../store/actions/quizActions";
import {
  getActiveQuestion,
  getAnswerLabels,
  getSelectedQuizQuestions
} from "../../../../store/rootReducer";

const AnswerList = ({ answers, selectedQuizQuestions, activeQuestion, answerLabels, setSelectedAnswer }) => {

  return (
    <ul className={'answersList'}>
      {answers.map((answer, index) =>
        (
          <li
            className={selectedQuizQuestions[activeQuestion].selectedAnswer - 1 === index ? 'answer-list-item active-item' : 'answer-list-item'}
            key={index}
            onClick={() => {
              setSelectedAnswer(selectedQuizQuestions[activeQuestion].id, answer.id);
            }}
          >
            <span className={'answerLabel'}>{answerLabels[index]}</span>
            {answer.text}
          </li>
        )
      )}
    </ul>
  )
};

const mapStateToProps = (state) => ({
  answerLabels: getAnswerLabels(state),
  activeQuestion: getActiveQuestion(state),
  selectedQuizQuestions: getSelectedQuizQuestions(state),
});

const mapDispatchToProps = {
  setSelectedAnswer: (questionIndex, answerId) => quizActions.setSelectedAnswer(questionIndex, answerId)
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerList);
