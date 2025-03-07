import { Dispatch } from "react";
import { homeApi } from "../api/homeApi";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  HomeAction,
} from "../actions/homeActions";

export const fetchDataEffect = async (
  dispatch: Dispatch<HomeAction>
): Promise<void> => {
  dispatch(fetchDataRequest());

  try {
    const data = await homeApi.getData();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    console.error(error);
    dispatch(fetchDataFailure("Failed to load data"));
  }
};
