import { FETCH_USER_FAIL, FETCH_USER_SUCCESS } from "./types";
import { getToken } from "../../../helpers/getToken";
import apiUrl from "../../../../config";

export const fetchUser = () => async (dispatch) => {
  const token = await getToken();

  const result = await fetch(`${apiUrl}/accounts/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
  });

  const resultData = await result.json();

  if (resultData.success) {
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: resultData.user,
    });
  } else {
    dispatch({
      type: FETCH_USER_FAIL,
      error: resultData.message,
    });
  }
};
