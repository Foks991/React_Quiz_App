import React from 'react';
import {connect} from "react-redux";

const Title = ({ quizTitle }) =>
    <div className={'title'}>
        <h1>{ quizTitle }</h1>
    </div>;

const mapStateToProps = (state) => {
    return {
        quizTitle: state.quiz.reactQuiz.quizTitle
    }
};


export default connect(mapStateToProps)(Title)
