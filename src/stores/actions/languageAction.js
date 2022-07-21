import axios from "axios";
import { CHANGE_LANGUAGE } from "../types/LanguageTypes";

export const getAllLanguage = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://landing-page-vnplus.herokuapp.com/api/language-text"
      );

      const data1 = data.data.map((item) => {
        return { [item.key]: item.value };
      });
      const obj = Object.assign({}, data1);
    //   await writeJsonFile("/vi/translation.json", obj);
      dispatch({ type: CHANGE_LANGUAGE, data: obj });
    } catch (error) {
      console.log(error);
    }
  };
};
