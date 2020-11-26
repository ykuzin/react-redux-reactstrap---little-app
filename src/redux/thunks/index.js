import { formValueSelector } from "redux-form";

import {
  addDatta,
  fetching,
  nextPage,
  setData,
  SignUp,
  addPost,
} from "../actions";
import { loadData } from "../../fetch";

export const getData = (page) => async (dispatch) => {
  dispatch(fetching(true));

  const result = await loadData(page);
  if (!result.length)
    return setTimeout(() => getData(page)(dispatch), 30000, dispatch);

  dispatch(setData(result));
  dispatch(fetching(false));
  dispatch(nextPage());
};

export const addData = (page) => async (dispatch) => {
  const result = await loadData(page);

  dispatch(addDatta(result));
  dispatch(nextPage());
};

export const addPosts = (info) => (dispatch) => {
  const data = formValueSelector("createPost");
  console.log(data);
  console.log(info);
  dispatch(addPost(info));
};
export const signUp = (info) => (dispatch) => {
  const data = formValueSelector("signUp");
  console.log(data);
  console.log(info);
  dispatch(SignUp(data));
};
