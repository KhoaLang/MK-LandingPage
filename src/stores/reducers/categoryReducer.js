import { GET_ALL_CATEGORY, GET_DETAIL_CATEGORY } from "../types/CategoryTypes";

const initialState = {
  listCategory: [],
  categoryDetail: "",
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return { ...state, listCategory: action.data };
    case GET_DETAIL_CATEGORY:
      console.log("action", action.data);
      return { ...state, categoryDetail: action.data };

    default:
      return state;
  }
};
