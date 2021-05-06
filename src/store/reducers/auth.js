import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions/auth/types";

// Initial state
const initialState = {};
// User register state
const userRegisterState = { user: {}, error: null };
// User register state
const userLoginState = { user: {}, error: null };

// User register reducer
export const userRegisterReducer = (state = userRegisterState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case REGISTER_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

// User login reducer
export const userLoginReducer = (state = userLoginState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case LOGIN_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
