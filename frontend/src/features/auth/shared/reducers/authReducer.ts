import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AuthAction,
} from "../actions/authActions";

interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, isLoading: false, token: action.payload };
    case AUTH_LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case AUTH_LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
};
