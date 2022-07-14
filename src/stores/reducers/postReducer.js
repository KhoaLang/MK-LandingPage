import { GET_ALL_POST, GET_DETAIL_POST } from "../types/PostTypes";

const initialState = {
  listPost: [],
  postDetail: "",
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return { ...state, listPost: action.data };
    case GET_DETAIL_POST:
      console.log("action", action.data);
      return { ...state, postDetail: action.data };

    default:
      return state;
  }
};
