import {
  FETCH_ALL_CATEGORIES_FAIL,
  FETCH_ALL_CATEGORIES_SUCCESS,
} from "../actions/categories/types";

const initialState = {
  categories: [],
  error: null,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload,
      };
    }

    case FETCH_ALL_CATEGORIES_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
