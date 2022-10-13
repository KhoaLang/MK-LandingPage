const initialState = {
  listProducts: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return { ...state, listProducts: action.data };

    default:
      return state;
  }
};
