import React from 'react';
import { connect } from "react-redux";
import { getQuiz } from "../../../../store/reducers/quizReducer";
import { getSelectedTestFromStorage } from "../../../../sessionStorage/sessionStorage";

const Title = ({quizTitle}) => {
  return (<div className={'title'}>
    <h1>{quizTitle}</h1>
  </div>)
};


const mapStateToProps = (state) => {
  return {
    quizTitle: getQuiz(state)[getSelectedTestFromStorage()].quizTitle,
  }
};


export default connect(mapStateToProps)(Title)
