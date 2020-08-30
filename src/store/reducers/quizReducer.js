import {quizActionTypes} from "../actions/quizActions";
import test from '../../data/tests'

export const quizInitialState = {
  ...test
};

export default function (state = quizInitialState, action) {
  switch (action.type) {
    case quizActionTypes.FETCH_TESTS_SUCCESS : {
      return {
        ...action.payload
      }
    }
    case quizActionTypes.SET_SELECTED_TEST : {
      return {
        ...state,
        selectedTest: action.payload
      }
    }
    default:
      return state
  }
};

export const getSelectedTest = state => state.QuizReducer.selectedTest;
export const getQuiz = state => state.QuizReducer;



