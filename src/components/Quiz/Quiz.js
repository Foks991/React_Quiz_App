import React, {useEffect} from 'react';
import { connect } from "react-redux";
import Result from "./Result/Result";
import Buttons from "./ActiveQuiz/Buttons/Buttons";
import ActiveQuiz from "./ActiveQuiz/ActiveQuiz";
import { quizActions } from "../../store/actions/quizActions";
import Navigation from "./Navigation/Navigation";
import { getQuizFromStorage } from "../../sessionStorage/quiz";
import {
  getActiveQuestion, getAllQuizzes,
  getSelectedQuiz,
  getSelectedQuizQuestions
} from "../../store/rootReducer";

const Quiz = ({ selectedQuizQuestions, activeQuestion, allQuizzes, setSelectedTest, history }) => {

  useEffect(() => {
    const quizId = getQuizFromStorage();
    quizId ? setSelectedTest(allQuizzes[quizId]) : history.push({pathname: `/`});
  },[]);

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
  allQuizzes: getAllQuizzes(state),
  selectedQuiz: getSelectedQuiz(state),
  selectedQuizQuestions: getSelectedQuizQuestions(state),
  activeQuestion: getActiveQuestion(state),
});

const mapDispatchToProps = {
  setSelectedTest:(id) => quizActions.setSelectedTest(id)
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
