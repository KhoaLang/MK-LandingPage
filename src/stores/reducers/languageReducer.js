import { CHANGE_LANGUAGE } from "../types/LanguageTypes";
import cookies from 'js-cookie'

const currentLanguageCode = cookies.get("i18next") || "vi";
const initialState = {
  language: currentLanguageCode,
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, language: action.data };

    default:
      return state;
  }
};
