import { getToken } from "../../../helpers/getToken";

export const fetchMonthlyAverage = () => async (dispatch) => {
  console.log(await getToken());
};

export const fetchKeyPerformanceAreas = () => async (dispatch) => {
  console.log("Fetch key performance areas");
};
