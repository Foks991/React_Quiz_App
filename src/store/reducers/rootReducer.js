import {quiz} from "./quizReducer";
import {userReducer} from "./userReducer";
import {combineReducers} from 'redux'

import * as fromQuiz from './quizReducer';
import * as fromUser from './userReducer';

export default combineReducers({
    quiz,
    userReducer,
})

export const getReactQuiz = state => fromQuiz.getReactQuiz(state.quiz);
export const getHtmlQuiz = state => fromQuiz.getHtmlQuiz(state.quiz);
export const getCssQuiz = state => fromQuiz.getCssQuiz(state.quiz);
export const getUsers = state => fromQuiz.getUsers(state.quiz);

export const getIsAuth = state => fromUser.getIsAuth(state.userReducer);
export const getUser = state => fromUser.getUser(state.userReducer);


