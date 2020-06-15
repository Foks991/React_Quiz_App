import {quizActionTypes} from './quizActions'

export function fetchTests() {
    return async dispatch => {
        //const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await fetch('http://testtesst.hostenko.net/back/data.php');
        const json = await response.json();
        dispatch({type: quizActionTypes.FETCH_TESTS_REQUEST, payload: json});
    }
}