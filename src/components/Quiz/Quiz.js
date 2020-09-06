import React, {useEffect} from 'react';
import { connect } from "react-redux";
import Result from "./Result/Result";
import Buttons from "./ActiveQuiz/Buttons/Buttons";
import ActiveQuiz from "./ActiveQuiz/ActiveQuiz";
import { quizActions } from "../../store/actions/quizActions";
import Navigation from "./Navigation/Navigation";
import { getQuizFromStorage } from "../../sessionStorage/quiz";
import { reloadPageListener } from "../../helpers/window";
import {
  getActiveQuestion,
  getAllQuizzes,
  getSelectedQuiz,
  getSelectedQuizQuestions,
} from "../../store/rootReducer";

const Quiz = ({ selectedQuizQuestions, activeQuestion, allQuizzes, setSelectedTest, history, chooseQuestion }) => {
  const currentUrl = history.location.pathname;
  const alertForwardButton = () =>{
    const result = confirm('You will lose your progress. Do you really want to leave? ');
    result ? history.push({pathname: `/`}) : history.push({pathname: currentUrl});
    window.removeEventListener("popstate", alertForwardButton);
  };

  reloadPageListener();

  useEffect(() => {
    const quizId = getQuizFromStorage();
    const selectedQuiz = {...allQuizzes[quizId]};
    chooseQuestion(0);
    quizId ? setSelectedTest(selectedQuiz) : history.push({pathname: `/`});
    window.addEventListener("popstate", alertForwardButton);
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
  setSelectedTest:(id) => quizActions.setSelectedTest(id),
  chooseQuestion: (index) => quizActions.chooseQuestion((index)),
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
