const initialState = {
  listContact: [],
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CONTACT":
      return { ...state, listContact: action.data };

    default:
      return state;
  }
};
