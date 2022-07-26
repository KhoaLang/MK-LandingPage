import {
  FETCH_POST,
  FETCH_POST_FAIL,
  GET_ALL_POST,
  GET_DETAIL_POST,
} from "../types/PostTypes";

const initialState = {
  listPost: [],
  isLoading: false,
  postDetail: {},
  postFilter:[]
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return { ...state, listPost: action.data, isLoading: false };
    case FETCH_POST:
      return { ...state, isLoading: true };
    case FETCH_POST_FAIL:
      return { ...state, isLoading: false };
    case "POST_FILTER":
      return { ...state,postFilter:action.data, isLoading: false };

    case GET_DETAIL_POST:
      // console.log("action", action.data);
      return { ...state, postDetail: action.data };

    default:
      return state;
  }
};
