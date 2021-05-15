import {
  FETCH_CATEGORY_STATS_FAIL,
  FETCH_CATEGORY_STATS_SUCCESS,
  FETCH_MONTH_STATS_FAIL,
  FETCH_MONTH_STATS_SUCCESS,
  FETCH_TOP_HABITS_FAIL,
  FETCH_TOP_HABITS_SUCCESS,
} from "../actions/streaks/types";

export const topHabitsStatsReducer = (
  state = { habits: [], error: null },
  action
) => {
  switch (action.type) {
    case FETCH_TOP_HABITS_SUCCESS: {
      return {
        ...state,
        habits: action.payload,
      };
    }

    case FETCH_TOP_HABITS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export const monthStatsReducer = (
  state = { streak: {}, error: null },
  action
) => {
  switch (action.type) {
    case FETCH_MONTH_STATS_SUCCESS: {
      return {
        ...state,
        streak: action.payload,
      };
    }

    case FETCH_MONTH_STATS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export const categoryStatsReducer = (state = {}, action) => {
  switch (action.type) {
  }
};
