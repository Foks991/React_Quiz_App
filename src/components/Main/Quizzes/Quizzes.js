import React from "react";

import {connect} from "react-redux";

import { getQuiz } from "../../../store/reducers/quizReducer";
import { getUser } from "../../../store/reducers/userReducer";
import { setSelectedTestToStorage } from "../../../sessionStorage/sessionStorage";
import { setUserToStorage } from "../../../sessionStorage/sessionStorage";

const Quizzes = ({quiz, user}) =>
  <div className={'quizList'}>
    {Object.keys(quiz).map(item => {
        if (item.endsWith('Quiz')) {
          return <div
            className={'quiz'}
            key={quiz[item].id}
            id={quiz[item].id}
            onClick={(e) => {
              let el = e.target;
              setSelectedTestToStorage(el.id);
              setUserToStorage(user);
              window.location = 'http://localhost:3000/quiz'
            }}
          >{quiz[item].quizTitle}
          </div>
        }
      }
    )}
  </div>;


const mapStateToProps = (state) => {
  return {
    quiz: getQuiz(state),
    user: getUser(state),
  }
};

export default connect(mapStateToProps, null)(Quizzes)