import { catetgoryService } from "../../services/CategoryService";
import { openNotification } from "../../utils/Notification";
import { GET_ALL_CATEGORY } from "../types/CategoryTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../types/LoadingType";

export const createCategoryAction = (data, resetForm) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await catetgoryService.createCategory(data);
      dispatch({ type: HIDE_LOADING });
      resetForm();

      openNotification("success", "Create Category success!");
      // dispatch({ type: HIDE_LOADING });
    } catch (error) {
      openNotification("error", `Create fail!`);
      dispatch({ type: HIDE_LOADING });
      // console.log(error.response?.data);
    }
  };
};
export const getAllCatetgoryAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      const { data } = await catetgoryService.getAllCategory();
      console.log(data.data);
      dispatch({ type: GET_ALL_CATEGORY, data: data.data });
      dispatch({ type: HIDE_LOADING });
    } catch (error) {
      dispatch({ type: HIDE_LOADING });
      // console.log(error.response?.data);
    }
  };
};
