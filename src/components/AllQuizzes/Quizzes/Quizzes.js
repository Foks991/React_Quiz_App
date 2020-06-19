import React from "react";
import {connect} from "react-redux";

const setQuizTypeToStorage = (quizType) => sessionStorage.setItem('quizType', quizType);

const Quizzes = ({quiz, quizType}) => {

    return (
        <div>
            {Object.keys(quiz).map(item =>
            <div
                className={'quizz'}
                key={quiz[item].id}
                id={quiz[item].id}
                onClick={(e) => {
                    let el = e.target;
                    setQuizTypeToStorage(el.id);
                    window.location = 'http://testtesst.hostenko.net/quiz'
                }}
            >{quiz[item].id}
            </div>
        )}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        quiz: state.quiz,
        quizType: state.user.quizType
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //onfetch: () => dispatch(fetchTests()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Quizzes)