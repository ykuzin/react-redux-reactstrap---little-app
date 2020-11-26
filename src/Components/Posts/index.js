import React, { useEffect } from "react";
import { Spinner, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getData } from "../../redux/thunks";
import PostPreview from "../PostPreview";

const Posts = ({ isFetching, posts, page, getData }) => {
  useEffect(() => getData(page), []);

  return isFetching ? (
    <Spinner />
  ) : (
    <Row>
      <Col sm={{ size: 8, offset: 2 }}>
        <ListGroup>
          {posts.map((post, index) => (
            <ListGroupItem key={index} className="list-group-item ">
              <PostPreview {...post} />
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ data }) => ({
  posts: data.data,
  isFetching: data.isFetching,
  page: data.page,
});

export default withRouter(connect(mapStateToProps, { getData })(Posts));
