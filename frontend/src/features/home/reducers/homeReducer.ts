import {
  HomeAction,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../actions/homeActions";
import { IDataResponse } from "../interfaces/dataResponse.interface";

interface HomeState {
  data: IDataResponse[];
  isLoading: boolean;
  error: string | null;
}

export const initialHomeState: HomeState = {
  data: [],
  isLoading: false,
  error: null,
};

export const homeReducer = (
  state: HomeState,
  action: HomeAction
): HomeState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
