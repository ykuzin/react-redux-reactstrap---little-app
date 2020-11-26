import React from "react";
import PropTypes from "prop-types";
import FormGroup from "reactstrap/es/FormGroup";
import FormFeedback from "reactstrap/es/FormFeedback";
import FormText from "reactstrap/es/FormText";
import Input from "../../../Components/inputs/Input";
import Label from "reactstrap/es/Label";

function InputReduxWrapper({
  input,
  meta,
  onChange,
  onManualChange,
  className,
  placeholder,
  formText,
  label,
  labelLink,
  size,
  type,
  inputComponent: InputComponent = Input,
  asyncValidate,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);
  const [error, setError] = React.useState(null);

  const e = error || (meta.touched && meta.error);

  // generate input id if label exists, based on form and input names
  const id = label ? meta.form + "_" + input.name : undefined;
  const inputValue =
    input.value || input.value === "" ? input.value : meta.initial || "";

  return (
    <FormGroup className={className}>
      {label && (
        <div className="form-label-group">
          <Label className="form-label w-100" for={id}>
            {label}
          </Label>
          {labelLink}
        </div>
      )}
      <div className="form-control-wrap">
        <InputComponent
          input
          size={size}
          invalid={e ? !!e.toString() : undefined}
          id={id}
          name={input.name}
          value={inputValue}
          onChange={(value) => {
            input.onChange(value);
            if (onChange) onChange(value);
            if (onManualChange && focused) onManualChange(value);
            if (asyncValidate) {
              setError(asyncValidate(value));
            }
          }}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          placeholder={placeholder}
          type={type}
          {...props}
        />
      </div>
      {e && (
        <FormFeedback className="d-block" invalid="true">
          {e}
        </FormFeedback>
      )}
      {formText && <FormText>{formText}</FormText>}
    </FormGroup>
  );
}

InputReduxWrapper.propTypes = {
  ...Input.propTypes,
  input: PropTypes.object,
  meta: PropTypes.object,
  onChange: PropTypes.func,
  onManualChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  labelLink: PropTypes.any,
  formText: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  append: PropTypes.element,
  prepend: PropTypes.element,
  asyncValidate: PropTypes.func,
};

export default InputReduxWrapper;
