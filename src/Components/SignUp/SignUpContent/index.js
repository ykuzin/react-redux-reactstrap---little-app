import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SignUpContent({ state, action }) {
  return (
    <>
      <Form handleSubmit={action} state={state} />
      <div className="form-note-s2 pt-4">
        alreadyHaveAccount{" "}
        <Link to="/">
          <strong>signInInstead</strong>
        </Link>
      </div>
    </>
  );
}

SignUpContent.propTypes = {
  action: PropTypes.func.isRequired,
};

export default SignUpContent;
