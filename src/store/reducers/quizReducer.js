import {quizActionTypes} from "../actions/quizActions";
import test from '../../data/tests'

const initialState = {
    ...test
};

export const quiz = (state = initialState, action) => {
    switch (action.type) {
        case quizActionTypes.FETCH_TESTS_SUCCESS : {
            return {
                ...action.payload
            }
        }
        default:
            return state
    }
};

export const getReactQuiz = state => state.reactQuiz;
export const getHtmlQuiz = state => state.htmlQuiz;
export const getCssQuiz = state => state.cssQuiz;

export const getQuiz = state => state.quiz;

export const getUsers = state => state.users;

