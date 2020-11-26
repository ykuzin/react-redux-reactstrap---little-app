import React from "react";

// import { connect } from "react-redux";

import CreateElement from "../CreateElement";
import connect from "react-redux/es/connect/connect";
import { addPosts } from "../../redux/thunks";

// const Redactor = () => (
//   <div className="mask rgba-gradient d-flex justify-content-center align-items-center">
//     <h3 className="display-3 font-weight-bold white-text mb-0 pt-md-5 pt-5">
//       WELCOME!
//     </h3>
//
//     <CreateElement />
//   </div>
// );

const Redactor = ({ postCreatingState, addPosts }) => (
  <div>
    <CreateElement state={postCreatingState} action={addPosts} />
  </div>
);

export default connect(
  (state) => ({
    postCreatingState: state.post.addPosts,
  }),
  { addPosts }
)(Redactor);
