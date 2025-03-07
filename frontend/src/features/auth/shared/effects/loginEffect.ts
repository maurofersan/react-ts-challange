import { Dispatch } from "react";
import {
  AuthAction,
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../actions/authActions";
import { loginApi } from "../../login/api/loginApi";

export const loginEffect = async (
  email: string,
  password: string,
  dispatch: Dispatch<AuthAction>
): Promise<string | null> => {
  dispatch(loginRequest());

  try {
    const token = await loginApi.signIn(email, password);
    dispatch(loginSuccess(token));
    return token;
  } catch (error) {
    console.error(error);
    dispatch(loginFailure("Invalid credentials"));
    return null;
  }
};
