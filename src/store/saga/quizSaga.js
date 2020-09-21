import { takeLatest, call, put } from "redux-saga/effects";
import { usersApi } from "../../api/requests";
import { quizActionTypes as type, quizActions } from "../actions/quizActions";

function* fetchTestSaga() {
  try {
    const response = yield call((asd) => usersApi.getUsers(asd));
    const tests = yield response.json();
  } catch (e) {
    console.log('quizSaga -> fetchTestSaga -> err', e);
  }
}

const quizSagas = [
  takeLatest(type.FETCH_USERS, fetchTestSaga)
];

export default quizSagas
