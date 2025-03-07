export const AUTH_LOGIN_REQUEST = "AUTH_LOGIN_REQUEST";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAILURE = "AUTH_LOGIN_FAILURE";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

interface LoginRequestAction {
  type: typeof AUTH_LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof AUTH_LOGIN_SUCCESS;
  payload: string;
}

interface LoginFailureAction {
  type: typeof AUTH_LOGIN_FAILURE;
  payload: string;
}

interface LogoutAction {
  type: typeof AUTH_LOGOUT;
}

export const loginRequest = (): LoginRequestAction => ({
  type: AUTH_LOGIN_REQUEST,
});

export const loginSuccess = (token: string): LoginSuccessAction => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: AUTH_LOGIN_FAILURE,
  payload: error,
});

export const logout = (): LogoutAction => ({
  type: AUTH_LOGOUT,
});

export type AuthAction =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutAction;
