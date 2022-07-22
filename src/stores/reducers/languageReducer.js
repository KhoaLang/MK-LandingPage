import { CHANGE_LANGUAGE, GET_ALL_LANGUAGE, LANGUAGE_DETAIL } from "../types/LanguageTypes";

// const currentLanguageCode = cookies.get("i18next") || "vi";
const initialState = {
  listLanguage:[],
  languageDetail:""
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, listLanguage: action.data };
    case GET_ALL_LANGUAGE:
      return { ...state, listLanguage: action.data };
    case LANGUAGE_DETAIL:
      return { ...state, languageDetail: action.data };

    default:
      return state;
  }
};
