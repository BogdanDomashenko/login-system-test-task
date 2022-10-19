export const SET_USER_DATA = "SET_USER_DATA";
export const RESET_USER = "RESET_USER";
export const SET_IS_LOADING = "SET_IS_LOADING";

const initialState = {
  data: {},
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case RESET_USER: {
      return initialState;
    }
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
