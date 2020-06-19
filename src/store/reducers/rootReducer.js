import {quiz} from "./quizReducer";
import {user} from "./userReducer";
import {combineReducers} from 'redux'

import * as fromQuiz from './quizReducer';
import * as fromUser from './userReducer';

export default combineReducers({
    quiz,
    user,
})

export const getReactQuiz = state => fromQuiz.getReactQuiz(state.quiz);
export const getHtmlQuiz = state => fromQuiz.getHtmlQuiz(state.quiz);
export const getCssQuiz = state => fromQuiz.getCssQuiz(state.quiz);

export const getQuiz = state => fromQuiz.getQuiz(state);

export const getUsers = state => fromQuiz.getUsers(state.quiz);

export const getIsAuth = state => fromUser.getIsAuth(state.user);
export const getUser = state => fromUser.getUser(state.user);


