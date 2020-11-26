import { ADD_DATA, FETCHING, NEXT_PAGE, SET_DATA } from "./types";

export const setData = (data) => ({
  type: SET_DATA,
  payload: { data },
});

export const addDatta = (data) => ({
  type: ADD_DATA,
  payload: { data },
});

export const fetching = (isFetching) => ({
  type: FETCHING,
  payload: { isFetching },
});

export const nextPage = () => ({
  type: NEXT_PAGE,
  payload: {},
});
