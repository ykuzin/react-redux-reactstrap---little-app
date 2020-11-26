import { ADD_POST } from "../actions";

const initialStatePost = {
  post: [],
};

const PostReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, post: [...state.post, action.payload.data] };
    default:
      return state;
  }
};

export default PostReducer;
