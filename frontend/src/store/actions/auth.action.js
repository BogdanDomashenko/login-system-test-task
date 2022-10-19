import { api } from "../../common/api/";
import {
  SET_AUTH_ERROR,
  SET_AUTH_SUCCESS_MESSAGE,
  SET_AUTH_IS_LOADING,
  SET_REGISTERED_EMAIL,
} from "../reducers/auth.reducer";
import { resetUser, setUserData } from "./user.action";

export const setAuthError = (errorMessage) => ({
  type: SET_AUTH_ERROR,
  payload: errorMessage,
});

export const setAuthSuccessMessage = (successMessage) => ({
  type: SET_AUTH_SUCCESS_MESSAGE,
  payload: successMessage,
});

const setIsLoading = (isLoading) => ({
  type: SET_AUTH_IS_LOADING,
  payload: isLoading,
});

export const setRegisteredEmail = (registeredEmail) => ({
  type: SET_REGISTERED_EMAIL,
  payload: registeredEmail,
});

export const logout = () => (dispatch) => {
  dispatch(setAuthSuccessMessage(null));
  dispatch(resetUser());
};

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const { data } = await api.post("/auth/register", { email, password });
    dispatch(setAuthError(false));
    dispatch(setIsLoading(false));
    dispatch(setRegisteredEmail(data.email));
    dispatch(setAuthSuccessMessage("You have been successfully registered"));
  } catch (error) {
    dispatch(setAuthError(error?.response?.data?.error || "Unexpected error"));
    dispatch(setIsLoading(false));
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const { data } = await api.post("/auth/login", { email, password });
    dispatch(setUserData(data));
    dispatch(setAuthError(false));
    dispatch(setIsLoading(false));
  } catch (error) {
    dispatch(setAuthError(error?.response?.data?.error || "Unexpected error"));
    dispatch(setIsLoading(false));
  }
};
