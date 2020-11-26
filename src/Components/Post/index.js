import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardLink,
} from "reactstrap";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

const Post = ({ match, data, loading }) => {
  const { id } = match.params;
  console.log(id);
  const currentPost = data.find((item) => item.id === id);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!currentPost) {
    return <Link to="/404" />;
  }

  return (
    <div>
      <Card className="card post">
        <CardImg
          className="card-img-top"
          alt="articleImage"
          src={currentPost.uri}
          top
        />
        <CardBody className="d-flex mx-auto h-100 flex-column">
          <CardTitle className=" mb-3" tag="h3">
            Author:{currentPost.author}
          </CardTitle>
          <CardText className="mb-4 card-text">
            Likes:{currentPost.likes}
          </CardText>
          <CardText className="mb-4 ">{currentPost.description}</CardText>
          <CardLink tag={Link} className="mb-4 card-text" to="/">
            Back
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data,
  loading: state.post.loading,
});

export default withRouter(connect(mapStateToProps)(Post));
