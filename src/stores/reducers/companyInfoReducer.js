const initialState = {
  companyInfo: {},
};

export const companyInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INFO":
      return { ...state, companyInfo: action.data };
    default:
      return state;
  }
};
