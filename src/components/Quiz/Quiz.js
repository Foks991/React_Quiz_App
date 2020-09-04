import React, {useEffect} from 'react';
import { connect } from "react-redux";
import Result from "./Result/Result";
import Buttons from "./ActiveQuiz/Buttons/Buttons";
import ActiveQuiz from "./ActiveQuiz/ActiveQuiz";
import { quizActions } from "../../store/actions/quizActions";
import Navigation from "./Navigation/Navigation";
import { getQuizFromStorage } from "../../sessionStorage/quiz";
import { useHistory } from 'react-router-dom'
import {
  getActiveQuestion, getAllQuizzes,
  getSelectedQuiz,
  getSelectedQuizQuestions
} from "../../store/rootReducer";

const Quiz = ({ selectedQuizQuestions, activeQuestion, allQuizzes, setSelectedTest, history, chooseQuestion }) => {



  useEffect(() => {
    const quizId = getQuizFromStorage();
    const selectedQuiz = {...allQuizzes[quizId]};
    chooseQuestion(0);
    quizId ? setSelectedTest(selectedQuiz) : history.push({pathname: `/`});
    window.addEventListener("popstate", (e) => {
      const result = confirm('You will lose your progress. Do you really want to leave? ');

      if(!result){
        history.push({pathname: `/html-quiz`})
      }else{
        history.push({pathname: `/`})
      }
    });
  },[]);

  return (

    selectedQuizQuestions ? <div className={'QuizContainer'}>
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
    </div> : null
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
