import React from 'react';
import {connect} from "react-redux";
import { getReactQuiz } from "../../../../../store/reducers/rootReducer";

const Title = ({ quizTitle }) =>
    <div className={'title'}>
        <h1>{ quizTitle }</h1>
    </div>;

const mapStateToProps = (state) => {
    return {
        quizTitle: getReactQuiz(state).quizTitle
    }
};


export default connect(mapStateToProps)(Title)
