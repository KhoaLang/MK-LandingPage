const initialState = {
  socialMediaLinks: [],
};

export const socialMediaLinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LINKS":
      return { ...state, socialMediaLinks: action.data };
    default:
      return state;
  }
};
