import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./types";
import apiUrl from "../../../../config";

export const registerUser = (userData) => async (dispatch) => {
  const result = await fetch(`${apiUrl}/accounts/register`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resultData = await result.json();

  if (resultData.success) {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        ...resultData,
      },
    });
  } else {
    dispatch({
      type: REGISTER_FAIL,
      payload: resultData.message,
    });
  }

  return resultData;
};

export const loginUser = (user) => async (dispatch) => {
  const result = await fetch(`${apiUrl}/accounts/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resultData = await result.json();

  if (resultData.success) {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        ...resultData,
      },
    });
  } else {
    dispatch({
      type: LOGIN_FAIL,
      payload: resultData.message,
    });
  }

  return resultData;
};
