import React from 'react'
import {connect} from 'react-redux'

const AllQuizzes = ({quiz, onAdd, test}) => {
    {console.log(quiz, test.state)}
    return (
        <div className={'allQuizzes'}>
            {Object.keys(quiz).map(item => <div className={'quizz'} key={quiz[item].id}>{quiz[item].id}</div>)}
            <button
                style={{width: 150, height: 50, backgroundColor: "lime",cursor: 'pointer', position: 'fixed', top: 0}}
                onClick={onAdd}
            >Fetch
            </button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        quiz: state.quiz,
        test: state.testReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => dispatch({type: 'ADD'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllQuizzes)