import {combineReducers} from 'redux'
import {quizes} from "./quizReducer";

import * as fromQuiz from './quizReducer';

export default combineReducers({
    quiz: quizes
})

export const getReactQuiz = state => fromQuiz.getReactQuiz(state.quiz);
export const getHtmlQuiz = state => fromQuiz.getHtmlQuiz(state.quiz);