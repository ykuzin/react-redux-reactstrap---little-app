import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import DataReducer from "./data";
import AuthReducer from "./auth";
import PostReducer from "./post";

const rootReducer = combineReducers({
  form: reduxFormReducer,
  post: PostReducer,
  data: DataReducer,
  auth: AuthReducer,
});

export default rootReducer;
