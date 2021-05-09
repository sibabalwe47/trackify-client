import { FETCH_USER_SUCCESS, FETCH_USER_FAIL } from "../actions/user/types";

export const userReducer = (state = { user: {}, error: null }, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case FETCH_USER_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
