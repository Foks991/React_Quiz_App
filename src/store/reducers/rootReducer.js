import {QuizReducer} from "./quizReducer";
import {UserReducer} from "./userReducer";
import {combineReducers} from 'redux'

import * as fromQuiz from './quizReducer';
import * as fromUser from './userReducer';

export default combineReducers({
    QuizReducer,
    UserReducer,
})

/*export const getUser = state => fromUser.getUser(state.user);
export const getIsAuth = state => fromUser.getIsAuth(state.user);*/


