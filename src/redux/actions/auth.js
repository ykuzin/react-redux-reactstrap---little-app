import { SIGN_UP } from "./types";

export const SignUp = (data) => ({
  type: SIGN_UP,
  payload: { data },
});
