import React from "react";
import reduxForm from "redux-form/es/reduxForm";
import ReduxForm from "redux-form/es/Form";
import Field from "redux-form/es/Field";

import { Button } from "reactstrap";

import { Input } from "../../forms/wrappers";

function Form({ handleSubmit }) {
  return (
    <ReduxForm noValidate onSubmit={(val) => handleSubmit(val)}>
      <Field
        name="email"
        type="email"
        label="email"
        placeholder="email"
        bsize="md"
        // style={}
        component={Input}
      />
      <Field
        name="name"
        label="name"
        placeholder="name"
        bsize="md"
        // style={}
        component={Input}
      />
      <Field
        name="surname"
        label="surname"
        placeholder="surname"
        bsize="md"
        // style={}
        component={Input}
      />
      <Field
        name="password"
        type="password"
        label="password"
        placeholder="password"
        bsize="dm"
        // style={}
        component={Input}
      />
      <Field
        name="confirmPassword"
        type="password"
        label="confirmPassword"
        placeholder="confirmPassword"
        bsize="md"
        // style={}
        component={Input}
      />

      <Button size="md" type="submit">
        register
      </Button>
    </ReduxForm>
  );
}

export default reduxForm({
  form: "signUp",
})(Form);
