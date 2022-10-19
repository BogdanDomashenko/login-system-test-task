export const SET_AUTH_ERROR = "SET_AUTH_ERROR";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_REGISTERED_EMAIL = "SET_REGISTERED_EMAIL";

const initialState = {
  registeredEmail: null,
  error: null,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_REGISTERED_EMAIL:
      return {
        ...state,
        registeredEmail: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
