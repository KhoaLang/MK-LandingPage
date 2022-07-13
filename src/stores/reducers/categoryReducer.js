import { GET_ALL_CATEGORY } from "../types/CategoryTypes";

const initialState = {
  listCategory: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return { ...state, listCategory: action.data };

    default:
      return state;
  }
};
