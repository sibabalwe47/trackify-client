import {
  FETCH_TOP_HABITS_SUCCESS,
  FETCH_TOP_HABITS_FAIL,
  FETCH_MONTH_STATS_SUCCESS,
  FETCH_MONTH_STATS_FAIL,
} from "./types";

import { getToken } from "../../../helpers/getToken";
import apiUrl from "../../../../config";

export const fetchMonthlyAverage = () => async (dispatch) => {
  const token = await getToken();
  const result = await fetch(
    `${apiUrl}/streaks/month?from=2021-04-03&to=2021-04-31`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    }
  );

  const resultData = await result.json();

  if (resultData.success) {
    dispatch({
      type: FETCH_MONTH_STATS_SUCCESS,
      payload: resultData.data,
    });
  } else {
    dispatch({
      type: FETCH_MONTH_STATS_FAIL,
      payload: resultData.message,
    });
  }
};

export const fetchKeyPerformanceAreas = () => async (dispatch) => {
  const token = await getToken();
  const result = await fetch(
    `${apiUrl}/streaks/habits?from=2021-04-03&to=2021-04-31`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    }
  );

  const resultData = await result.json();

  if (resultData.success) {
    dispatch({
      type: FETCH_TOP_HABITS_SUCCESS,
      payload: resultData.data,
    });
  } else {
    dispatch({
      type: FETCH_TOP_HABITS_FAIL,
      payload: resultData.message,
    });
  }
};
