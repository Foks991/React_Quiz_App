/*
import {takeLatest, call} from "redux-saga/effects";
import {usersApi} from "../../api/requests";
import {quizActionTypes as type, quizActions} from "../actions/quizActions";

function* fetchTestSaga() {
    try {
        const response = yield call([usersApi, 'getUsers']);
        const json = yield response.json();
        console.log(json)
    } catch (e) {
        console.log('quizSaga -> fetchTestSaga -> err', e);
    }
}

const quizSagas = [
    takeLatest(type.FETCH_TESTS_REQUEST, fetchTestSaga)
];

export default quizSagas*/
