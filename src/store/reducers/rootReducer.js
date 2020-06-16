import {quiz} from "./quizReducer";
import {userReducer} from "./userReducer";
import {combineReducers} from 'redux'

import * as fromQuiz from './quizReducer';

export default combineReducers({
    quiz,
    userReducer,
})

export const getReactQuiz = state => fromQuiz.getReactQuiz(state.quiz);
export const getHtmlQuiz = state => fromQuiz.getHtmlQuiz(state.quiz);
export const getCssQuiz = state => fromQuiz.getCssQuiz(state.quiz);


