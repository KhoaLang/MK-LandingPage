import { languageService } from "../../services/languageService";
import { openNotification } from "../../utils/Notification";
import {
  CHANGE_LANGUAGE,
  GET_ALL_LANGUAGE,
  LANGUAGE_DETAIL,
} from "../types/LanguageTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../types/LoadingType";

export const getAllLanguage = (keyword) => {
  return async (dispatch) => {
    try {
      const { data } = await languageService.getAllLanguage(keyword);
      // var count = 0;
      // for(var i = 0; i < data.data.length; ++i){
      //     if(data.data[i].language == "vi" )
      //         count = count+1;
      // }
      // let obj = [];
      // let temp = [];
      // for (let i = 0; i < count; i++) {
      //   obj = [...obj, data.data[i]];

      //   for (let j = 0; j < data.data.length; j++) {
      //     if (
      //       obj[i]?.key == data.data[j].key &&
      //       obj[i]?.language !== data.data[j].language
      //     ) {
      //       temp[i] = {
      //         ...obj[i],
      //         [data.data[j].language]: data.data[j].value,
      //       };

      //     }
      //   }
      // }
      dispatch({ type: GET_ALL_LANGUAGE, data: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDetailLanguageAction = (id, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await languageService.getDetailLanguage(id);

      dispatch({ type: LANGUAGE_DETAIL, data: data.data });
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        navigate("/not-found");
      }
    }
  };
};
export const createLanguageAction = (data, resetForm) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await languageService.createLanguage(data);
      dispatch({ type: HIDE_LOADING });
      // dispatch(getAllCatetgoryAction);
      resetForm();

      openNotification("success", "Create languagge success!");
      // dispatch({ type: HIDE_LOADING });
    } catch (error) {
      openNotification("error", `Create language fail!`);
      dispatch({ type: HIDE_LOADING });
      console.log(error);
    }
  };
};

export const updateLanguageAction = (id, data) => {
  console.log(id, data);
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await languageService.updateLanguage(id, data);
      dispatch(getAllLanguage);
      openNotification("success", "Update language success!");
      dispatch({ type: HIDE_LOADING });
    } catch (error) {
      dispatch({ type: HIDE_LOADING });
      openNotification("error", `Update language fail!`);
      console.log(error);
    }
  };
};

export const deleteLanguageAction = (id, navigate) => {
  return async (dispatch) => {
    try {
      // dispatch({ type: SHOW_LOADING });
      await languageService.deleteLanguage(id);
      openNotification("success", "Delete language success!");
      dispatch(getAllLanguage());
      if (navigate) {
        navigate(-1);
      }
    } catch (error) {
      openNotification("error", `Delete language fail!`);
      console.log(error);
    }
  };
};
