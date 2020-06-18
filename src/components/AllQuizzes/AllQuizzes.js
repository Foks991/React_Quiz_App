import React, { useEffect, useState } from 'react'
import Quizzes from "./Quizzes/Quizzes";
import {connect} from "react-redux";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import {quizActions} from "../../store/actions/actions";
import { getUsers, getIsAuth, getUser } from "../../store/reducers/rootReducer";
import GoogleAuthStatus from "./GoogleAuthStatus/GoogleAuthStatus";

const AllQuizzes = (({ user, isAuth, users, quiz, isLogin, onfetch, quizState }) => {
    useEffect(() => {
        onfetch()
    }, []);

    return (
        <div className={'allQuizzes'}>
            { isAuth ?
                <>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <span>{`HELLO ${user.name}`}</span>
                        <span>{`YOUR FAMILY ${user.surname}`}</span>
                        <span>{`YOUR EMAIL ${user.email}`}</span>
                    </div>
                    <GoogleAuthStatus
                        isLogin={isLogin}
                    />
                    <Quizzes/>
                </>
                :
                <GoogleAuth/>
            }
        </div>
    )
});

const mapStateToProps = (state) => {
    return {
        quiz: state,
        isLogin: state.userReducer.user.isLogin,
        quizState: state.quiz,
        users: getUsers(state),
        isAuth: getIsAuth(state),
        user: getUser(state),
    }
};

const mapDispatchToProps = (dispatch) => ({
    onfetch: () => dispatch(quizActions.fetchTestsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllQuizzes)

