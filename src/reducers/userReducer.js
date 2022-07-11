const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "first":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
