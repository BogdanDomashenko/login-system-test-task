export const SET_USER_DATA = "SET_USER_DATA";
export const RESET_USER = "RESET_USER";

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
    default:
      return state;
  }
};

export default userReducer;
