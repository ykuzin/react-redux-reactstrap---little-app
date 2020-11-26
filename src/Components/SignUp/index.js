import React from "react";
import connect from "react-redux/es/connect/connect";

import { signUp } from "../../redux/thunks";
import SignUpContent from "./SignUpContent";

const SignUp = ({ signUp }) => (
  <div className="auth">
    <SignUpContent action={signUp} />
  </div>
);

export default connect(
  (state) => ({
    signUpState: state.form.signUp,
  }),
  { signUp }
)(SignUp);
