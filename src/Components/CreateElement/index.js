import React from "react";
import { Row, Col } from "reactstrap";

import PostForm from "./PostForm";
import PropTypes from "prop-types";

const CreateElement = ({ action, state }) => (
  <Row>
    <Col>
      <PostForm handleSubmit={action} state={state} />
    </Col>
  </Row>
);
CreateElement.propTypes = {
  action: PropTypes.func.isRequired,
};

export default CreateElement;
