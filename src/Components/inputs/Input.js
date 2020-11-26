import React from "react";
import PropTypes from "prop-types";
import InputRS from "reactstrap/es/Input";

function Input({ append, copy, prepend, type, id, size, onChange, ...props }) {
  const isPasswordType = type === "password";
  const [isSecure] = React.useState(isPasswordType);

  return (
    <>
      {prepend && <div className="form-icon form-icon-left">{prepend}</div>}
      <InputRS
        className="form-control"
        {...props}
        type={isPasswordType ? (isSecure ? "password" : "text") : type}
        id={id}
        onChange={onChange}
        readOnly={!onChange}
        bsSize={size}
      />
      {isPasswordType || append}
    </>
  );
}

Input.propTypes = {
  ...InputRS.propTypes,
  append: PropTypes.element,
  prepend: PropTypes.element,
  copy: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default Input;
