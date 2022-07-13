const initialState = {};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "first":
      return { ...state };

    default:
      return state;
  }
};
