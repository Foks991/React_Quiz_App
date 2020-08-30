import QuizReducer, * as fromQuiz from  "./reducers/quizReducer";
import UserReducer, * as fromUser from "./reducers/userReducer";
import {combineReducers} from 'redux'

export const initialState = {
  user: fromUser.userInitialState,
  quiz: fromQuiz.quizInitialState,
};

export default combineReducers({
  QuizReducer,
  UserReducer,
})

/*export const getUser = state => fromUser.getUser(state.user);
export const getIsAuth = state => fromUser.getIsAuth(state.user);*/


