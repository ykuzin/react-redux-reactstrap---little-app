import React from "react";
import { Button, Input, Label } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import ReduxForm from "redux-form/es/Form";

const PostForm = ({ handleSubmit, state }) => {
  return (
    <ReduxForm
      onSubmit={(val) => handleSubmit(val)}
      noValidate
      className="form-group"
    >
      <Label for="post-author" hidden>
        Author
      </Label>
      <Field
        id="post-author"
        name="author"
        label="author"
        placeholder="author"
        component={Input}
      />

      <Label for="post-text" hidden>
        Text
      </Label>
      <Field
        id="post-text"
        name="posted"
        label="posted"
        placeholder="Write your story"
        bsize="md"
        style={{ height: 200 }}
        component={Input}
        type="textarea"
      />
      <Button size="md" type="submit">
        create
      </Button>
    </ReduxForm>
  );
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "createPost",
})(PostForm);
