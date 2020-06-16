import {userActionTypes} from '../actions/userActions'

const initialState = {
    user : {
        name: null,
        surname: null,
        email: null,
        isLogin: false,
    },
    quizType : null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionTypes.SET_USER:
            return {
                user: action.payload
            };
        case userActionTypes.SET_QUIZ_TYPE:
            return {
                quizType: action.payload
            };
        default:
            return state
    }
};