import { GET_ALL_HIRING, GET_DETAIL_HIRING } from "../types/HiringTypes";

const initialState = {
  listHiring: [],
  hiringDetail: null,
};

export const hiringReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HIRING:
      return { ...state, listHiring: action.data };
    case GET_DETAIL_HIRING:
      return { ...state, hiringDetail: action.data };

    default:
      return state;
  }
};
