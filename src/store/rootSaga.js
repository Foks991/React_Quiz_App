import { all } from 'redux-saga/effects';
import quizSaga from "./saga/quizSaga";

export default function* rootSaga() {
  yield all([
    ...quizSaga,
  ])
}
