import React from 'react';
import { connect } from "react-redux";
import Result from "./Result/Result";
import Buttons from "./ActiveQuiz/Buttons/Buttons";
import ActiveQuiz from "./ActiveQuiz/ActiveQuiz";
import Navigation from "./Navigation/Navigation";

import {
  getActiveQuestion,
  getSelectedQuiz,
  getSelectedQuizQuestions
} from "../../store/rootReducer";

const Quiz = ({ selectedQuizQuestions, activeQuestion }) => {

  return (
    <div className={'QuizContainer'}>
      <div className={'activeTests'}>

        {selectedQuizQuestions.map(item => {
          const {answers, question, id} = item;

          return (
            id === activeQuestion &&
            <ActiveQuiz
              key={id}
              question={question}
              answers={answers}
            />)
        })}

        <Buttons/>
        <Result/>
      </div>

      <div className={'navigation'}>
        <Navigation/>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  selectedQuiz: getSelectedQuiz(state),
  selectedQuizQuestions: getSelectedQuizQuestions(state),
  activeQuestion: getActiveQuestion(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
