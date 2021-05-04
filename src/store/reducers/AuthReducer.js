import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from '../actions/auth/types'


const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    error: ""
}

export const AuthReducer = (state = initialState, action) => {
    switch(action.type) {

        case LOGIN_REQUEST:
        case REGISTER_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: action.payload.user
            }
        }

        case REGISTER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                user: action.payload
            }
        }

        case REGISTER_FAIL: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }


        default: 
            return state;
    }
}