import {combineReducers} from 'redux'
import {quiz} from "./quizReducer";
import {testReducer} from "./testReducer";

import * as fromQuiz from './quizReducer';

export default combineReducers({
    quiz,
    testReducer
})

export const getReactQuiz = state => fromQuiz.getReactQuiz(state.quiz);
export const getHtmlQuiz = state => fromQuiz.getHtmlQuiz(state.quiz);
export const getCssQuiz = state => fromQuiz.getCssQuiz(state.quiz);

