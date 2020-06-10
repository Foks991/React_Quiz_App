import React from 'react'
import {connect} from 'react-redux'

const AllQuizzes = ({quizzes, arr}) => {
    return (
        Object.keys(quizzes).map(item => <div className={'quiz'} key={quizzes[item].id}>{quizzes[item].id}</div>)
    )
};

const mapStateToProps = (state) => {
    return {
        quizzes: state.quiz,
    }
};

export default connect(mapStateToProps, null)(AllQuizzes)