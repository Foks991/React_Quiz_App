
export const userActionTypes = {
    SET_USER:  'SET_USER',
    SET_QUIZ_TYPE: 'SET_QUIZ_TYPE',
    GOOGLE_AUTH_SUCCESS: 'GOOGLE_AUTH_SUCCESS',
};

export const userAction = {
    googleAuthSuccess: (payload) => {
        return ({ type: userActionTypes.GOOGLE_AUTH_SUCCESS, payload })
    },
};