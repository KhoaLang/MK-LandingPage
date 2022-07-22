import { GET_ALL_MOMENT, GET_DETAIL_MOMENT } from "../types/MomentTypes";

const initialState = {
  listMoment: [],
  momentDetail: "",
  error: "",
};

export const momentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MOMENT:
      return { ...state, listMoment: action.data };
    case GET_DETAIL_MOMENT:
      return {
        ...state,
        momentDetail: action.data
       
      };
    case "SET_ERROR":
      return {
        ...state,
        momentDetail: action.data,
      };

    default:
      return state;
  }
};
