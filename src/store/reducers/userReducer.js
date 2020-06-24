import {userActionTypes} from '../actions/userActions'

const initialState = {
    user : {
        name: null,
        surname: null,
        email: null,
    },
    isAuth: false,
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
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
        default: return state
    }
};

export const getUser = state => state.UserReducer.user;
export const getIsAuth = state => state.UserReducer.isAuth;
