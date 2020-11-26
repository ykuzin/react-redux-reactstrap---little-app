import { SIGN_UP } from "../actions";

const initialState = { signUp: {} };

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP:
      return {
        ...state,
        SignUp: payload.data,
      };
    default:
      return state;
  }
};

export default AuthReducer;
