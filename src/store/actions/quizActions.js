import {FETCH_TESTS} from "./types";

export const quizActionTypes = {
    FETCH_TESTS_REQUEST:  'FETCH_TESTS_REQUEST',
    FETCH_TESTS_SUCCESS:  'FETCH_TESTS_SUCCESS',
};

export const quizActions = {
    fetchTestsRequest: () => {
        console.log(123321)
        return ({ type: quizActionTypes.FETCH_TESTS_REQUEST })
    },
    fetchTestsSuccess: ({ payload }) => ({
        type: quizActionTypes.FETCH_TESTS_SUCCESS, payload,
    }),
};

// return async dispatch => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const json = await response.json();
//     console.log(json);
//     dispatch({type: FETCH_TESTS, payload: json})
// }