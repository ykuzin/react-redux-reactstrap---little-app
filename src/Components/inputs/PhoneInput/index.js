import React, { useState } from "react";
import PhoneInputLib, {
  parsePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input/input";
import cn from "classnames";

import { formatPhoneNumberIntl } from "react-phone-number-input";
import Input from "../Input";

function PhoneInput({ className, value, ...props }) {
  const [inputValue, changeValue] = useState(
    formatPhoneNumberIntl("+" + value)
  );

  return (
    <PhoneInputLib
      value={inputValue}
      onChange={(phone) => {
        let formattedPhone = phone;
        if (isValidPhoneNumber(formattedPhone)) {
          formattedPhone = parsePhoneNumber(phone).number.substring(1);
        }
        changeValue(phone);
        props.onChange(formattedPhone);
      }}
      className={cn(
        styles.input,
        { [styles.error]: props.invalid },
        "form-control",
        className
      )}
    />
  );
}

PhoneInput.propTypes = Input.propTypes;

export default PhoneInput;
