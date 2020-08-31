import quizReducer, * as fromQuiz from  "./reducers/quizReducer";
import { combineReducers } from 'redux'

export const initialState = {
  quiz: fromQuiz.quizInitialState,
};

export default combineReducers({
  quiz: quizReducer,
})

export const getQuizTitle = state => fromQuiz.getQuizTitle(state.quiz);
export const getAllQuizzes = state => fromQuiz.getAllQuizzes(state.quiz);
export const getQuizIsDone = state => fromQuiz.getQuizIsDone(state.quiz);
export const getSelectedQuiz = state => fromQuiz.getSelectedQuiz(state.quiz);
export const getAnswerLabels = state => fromQuiz.getAnswerLabels(state.quiz);
export const getActiveQuestion = state => fromQuiz.getActiveQuestion(state.quiz);
export const getSelectedQuizQuestions = state => fromQuiz.getSelectedQuizQuestions(state.quiz);


