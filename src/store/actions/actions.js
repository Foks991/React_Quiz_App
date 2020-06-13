import {FETCH_TESTS} from './types'

export function fetchTests() {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        dispatch({type: 'FETCH_TESTS_REQUEST', payload: json});
    }
}



