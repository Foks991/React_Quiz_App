import {quizActionTypes} from "../actions/quizActions";
import test from '../../data/tests'

const initialState = {
    ...test
};

export const QuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case quizActionTypes.FETCH_TESTS_SUCCESS : {
            return {
                ...action.payload
            }
        }
        case quizActionTypes.SET_SELECTED_TEST : {
            return {
                ...state,
                selectedTest : action.payload
            }
        }
        default:
            return state
    }
};

export const getSelectedTest = state => state.QuizReducer.selectedTest;
export const getQuiz = state => state.QuizReducer;



