import React, {useEffect} from 'react'
import Quizzes from "./Quizzes/Quizzes";
import {connect} from "react-redux";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import {quizActions} from "../../store/actions/actions";
import {getIsAuth} from "../../store/reducers/userReducer";
import {getUser} from '../../store/reducers/userReducer'

const Main = (({user, isAuth}) => {
    /*useEffect(() => {
        onfetch()
    }, []);*/
    console.log(isAuth);
    return (
        <>
            <div className={'allQuizzes'}>
                {isAuth ?
                    <>
                        <div className={'userGreetings'}>
                            <p>{`Hello ${user.name}!!!`}</p>
                            <p>Choose test for test your skills</p>
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
        user: getUser(state),
        isAuth: getIsAuth(state),
    }
};

const mapDispatchToProps = (dispatch) => ({
    onfetch: () => dispatch(quizActions.fetchTestsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)
