import React from 'react'
import Quizzes from "./Quizzes/Quizzes";
import {connect} from "react-redux";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import {fetchTests} from "../../store/actions/actions";
import GoogleAuthStatus from "./GoogleAuthStatus/GoogleAuthStatus";

const mapStateToProps = (state) => {
    return {
        quiz: state,
        //isLogin: state.userReducer.user.isLogin
        quizState: state.quiz
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetch: () => dispatch(fetchTests()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(({quiz, isLogin, onfetch, quizState}) => {
    console.log(quizState);
    return (
        <div className={'allQuizzes'}>
            <GoogleAuth/>
           {/* <GoogleAuthStatus
                isLogin={isLogin}
            />*/}
            <Quizzes/>
            <button
                onClick={onfetch}
            >
                fetch
            </button>
        </div>
    )
})

