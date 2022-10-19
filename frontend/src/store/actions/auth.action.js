import { api } from "../../common/api/";
import {
  SET_AUTH_ERROR,
  SET_IS_LOADING,
  SET_REGISTERED_EMAIL,
} from "../reducers/auth.reducer";
import { setUserData } from "./user.action";

export const setAuthError = (errorMessage) => ({
  type: SET_AUTH_ERROR,
  payload: errorMessage,
});

const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

export const setRegisteredEmail = (registeredEmail) => ({
  type: SET_REGISTERED_EMAIL,
  payload: registeredEmail,
});

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const { data } = await api.post("/auth/register", { email, password });
    dispatch(setRegisteredEmail(data.email));
    dispatch(setUserData(data));
    dispatch(setAuthError(false));
    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch(setAuthError(error?.response?.data?.error || "Unexpected error"));
    dispatch(setIsLoading(false));
  }
};
