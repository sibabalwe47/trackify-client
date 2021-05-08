import {
  FETFETCH_ALL_CATEGORIES_SUCCESS,
  FETCH_ALL_CATEGORIES_FAIL,
} from "./types";
import { getToken } from "../../../helpers/getToken";
import apiUrl from "../../../../config";

export const fetchAllCategories = () => async (dispatch) => {
  // Get token
  const token = await getToken();
  // Fetch items
  const result = await fetch(`${apiUrl}/categories/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
  });
  // Format items results
  const resultData = await result.json();

  console.log(resultData);
};
