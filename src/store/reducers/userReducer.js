import {userActionTypes} from '../actions/userActions'

const initialState = {
    user : {
        name: null,
        surname: null,
        email: null,
        isLogin: false,
    },
    quizType : null,
    isAuth: false,
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case userActionTypes.SET_QUIZ_TYPE:
            return {
                ...state,
                quizType: action.payload
            };
        case userActionTypes.GOOGLE_AUTH_SUCCESS:
            const { profileObj } = action.payload;
            const { email, familyName, givenName } = profileObj;
            return {
                ...state,
                user: {
                    ...state.user,
                    name: givenName,
                    surname: familyName,
                    email: email,
                },
                isAuth: true,
            };
        default:
            return state
    }
};

export const getIsAuth = state => state.isAuth;
export const getUser = state => state.user;