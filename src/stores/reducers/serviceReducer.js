const initialState = {
  listService: [],
};

export const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_SERVICES":
      return { ...state, listService: action.data };
    default:
      return state;
  }
};
