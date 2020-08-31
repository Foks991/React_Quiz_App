import React from 'react';
import { connect } from "react-redux";
import { getQuizTitle } from "../../../../store/rootReducer";

const Title = ({quizTitle}) => <div className={'title'}>{quizTitle}</div>;

const mapStateToProps = (state) => ({
  quizTitle: getQuizTitle(state)
});

export default connect(mapStateToProps)(Title)
