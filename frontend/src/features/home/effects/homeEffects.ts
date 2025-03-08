import { Dispatch } from "react";
import { homeApi } from "../api/homeApi";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  HomeAction,
} from "../actions/homeActions";

export const fetchDataEffect = async (
  page: number,
  dispatch: Dispatch<HomeAction>
): Promise<void> => {
  dispatch(fetchDataRequest());

  try {
    const dataResponse = await homeApi.getData(page);
    dispatch(fetchDataSuccess(dataResponse));
  } catch (error) {
    console.error(error);
    dispatch(fetchDataFailure("Failed to load data"));
  }
};
