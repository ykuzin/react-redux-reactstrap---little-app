import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";

import "./style.scss";

const PostPreview = ({ id, author, description, small, history }) => (
  <Card className=" card">
    <CardImg className="card-img" alt="articleImage" src={small} top />
    <CardBody className="d-flex flex-column">
      <CardTitle className=" mb-3" tag="h3">
        {author}
      </CardTitle>
      <CardText className="mb-4 card-text">
        {description}
        <br />
      </CardText>
      <CardLink tag={Link} to={`/post/${id}`}>
        Read more...
      </CardLink>
    </CardBody>
  </Card>
);

export default withRouter(PostPreview);
