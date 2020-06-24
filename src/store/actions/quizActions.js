export const quizActionTypes = {
    SET_SELECTED_TEST: 'SET_SELECTED_TEST',
    FETCH_TESTS_REQUEST:  'FETCH_TESTS_REQUEST',
    FETCH_TESTS_SUCCESS:  'FETCH_TESTS_SUCCESS',
};

export const quizActions = {
    fetchTestsRequest: () => {
        return ({ type: quizActionTypes.FETCH_TESTS_REQUEST })
    },
    fetchTestsSuccess: ({ users }) => ({
        type: quizActionTypes.FETCH_TESTS_SUCCESS, payload: users,
    }),
    setSelectedTest: (test) => {
        return {type: quizActionTypes.SET_SELECTED_TEST, payload: test}
    },
};
