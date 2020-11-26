import { ADD_DATA, FETCHING, NEXT_PAGE, SET_DATA } from "../actions";

const initialState = {
  data: [],
  page: 1,
  isFetching: false,
  error: null,
  userContent: [],
};

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload.data,
      };
    case FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };

    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
      };
    default:
      return state;
  }
};

export default DataReducer;
