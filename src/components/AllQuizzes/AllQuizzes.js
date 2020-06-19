import React, {useEffect} from 'react'
import Quizzes from "./Quizzes/Quizzes";
import {connect} from "react-redux";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import {quizActions} from "../../store/actions/actions";
import {getUsers, getIsAuth, getUser} from "../../store/reducers/rootReducer";

const AllQuizzes = (({user, isAuth, users, quiz, isLogin, onfetch, quizState}) => {
    /*useEffect(() => {
        onfetch()
    }, []);*/
    console.log(user);
    return (
        <>
            {/*<button onClick={onfetch}>asd</button>*/}
            <div className={'allQuizzes'}>
                {isAuth ?
                    <>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span>{`HELLO ${user.name}`}</span>
                            <span>{`YOUR FAMILY ${user.surname}`}</span>
                            <span>{`YOUR EMAIL ${user.email}`}</span>
                        </div>
                        <Quizzes/>
                    </>
                    :
                    <GoogleAuth/>
                }
            </div>
        </>
    )
});

const mapStateToProps = (state) => {
    return {
        quiz: state,
        isLogin: state.user.user.isLogin,
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

