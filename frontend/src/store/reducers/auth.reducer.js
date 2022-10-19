export const SET_AUTH_ERROR = "SET_AUTH_ERROR";
export const SET_AUTH_SUCCESS_MESSAGE = "SET_AUTH_SUCCESS_MESSAGE";
export const SET_AUTH_IS_LOADING = "SET_AUTH_IS_LOADING";
export const SET_REGISTERED_EMAIL = "SET_REGISTERED_EMAIL";

const initialState = {
  registeredEmail: null,
  error: null,
  successMessage: null,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_AUTH_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_REGISTERED_EMAIL:
      return {
        ...state,
        registeredEmail: action.payload,
      };
    case SET_AUTH_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
