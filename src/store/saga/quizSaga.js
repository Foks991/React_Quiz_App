import {takeLatest, call, put} from "redux-saga/effects";
import {usersApi} from "../../api/requests";
import {quizActionTypes as type, quizActions} from "../actions/quizActions";

function* fetchTestSaga() {
    try {
        const response = yield call(usersApi.getUsers);
        const users = yield response.json();
        yield put(quizActions.fetchTestsSuccess({ users }));
    } catch (e) {
        console.log('quizSaga -> fetchTestSaga -> err', e);
    }
}

const quizSagas = [
    takeLatest(type.FETCH_TESTS_REQUEST, fetchTestSaga)
];

export default quizSagas
