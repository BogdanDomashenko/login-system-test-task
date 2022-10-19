import { RESET_USER, SET_USER_DATA } from "../reducers/user.reducer";

export const setUserData = (data) => ({ type: SET_USER_DATA, payload: data });

export const resetUser = () => ({ type: RESET_USER });
