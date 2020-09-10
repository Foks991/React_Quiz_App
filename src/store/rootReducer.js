import quizReducer, * as fromQuiz from  "./reducers/quizReducer";
import stepReducer, * as fromStep from "./reducers/stepReducer";
import { combineReducers } from 'redux'

export const initialState = {
  quiz: fromQuiz.quizInitialState,
  step: fromStep.stepInitialState,
};

export default combineReducers({
  quiz: quizReducer,
  step: stepReducer,
})

//Quiz region
export const getQuizId = state => fromQuiz.getQuizId(state.quiz);
export const getQuizTitle = state => fromQuiz.getQuizTitle(state.quiz);
export const getAllQuizzes = state => fromQuiz.getAllQuizzes(state.quiz);
export const getQuizIsDone = state => fromQuiz.getQuizIsDone(state.quiz);
export const getSelectedQuiz = state => fromQuiz.getSelectedQuiz(state.quiz);
export const getAnswerLabels = state => fromQuiz.getAnswerLabels(state.quiz);
export const getActiveQuestion = state => fromQuiz.getActiveQuestion(state.quiz);
export const getSelectedQuizQuestions = state => fromQuiz.getSelectedQuizQuestions(state.quiz);
//end region

//Step region
export const getStepsState = state => fromStep.getStepsState(state.step);
//end region
