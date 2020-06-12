//import {FETCH_TESTS} from "./types";

export const quizActionTypes = {
    FETCH_TESTS_REQUEST:  'FETCH_TESTS_REQUEST',
    FETCH_TESTS_SUCCESS:  'FETCH_TESTS_SUCCESS',
    ADD:  'ADD',
};
/*
export const quizActions = {
    add: () => {
        console.log(123321);
        return ({ type: quizActionTypes.ADD })
    },
    fetchTestsSuccess: ({ payload }) => ({
        type: quizActionTypes.FETCH_TESTS_SUCCESS, payload,
    }),
};*/

// return async dispatch => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const json = await response.json();
//     console.log(json);
//     dispatch({type: FETCH_TESTS, payload: json})
// }