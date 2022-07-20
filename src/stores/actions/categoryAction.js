import { catetgoryService } from "../../services/CategoryService";
import { openNotification } from "../../utils/Notification";
import { GET_ALL_CATEGORY, GET_DETAIL_CATEGORY } from "../types/CategoryTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../types/LoadingType";

export const createCategoryAction = (data, resetForm) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await catetgoryService.createCategory(data);
      dispatch({ type: HIDE_LOADING });
      dispatch(getAllCatetgoryAction);
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
      const { data } = await catetgoryService.getAllCategory();
      dispatch({ type: GET_ALL_CATEGORY, data: data.data });
    } catch (error) {
      // console.log(error.response?.data);
    }
  };
};
export const getDetailCatetgoryAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await catetgoryService.getDetailById(id);
      dispatch({ type: GET_DETAIL_CATEGORY, data: data.data });
    } catch (error) {
      // console.log(error.response?.data);
    }
  };
};

export const updateCategoryAction = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await catetgoryService.updateCategory(id, data);
      dispatch(getAllCatetgoryAction)
      openNotification("success", "Update Category success!");
      dispatch({ type: HIDE_LOADING });
    } catch (error) {
      dispatch({ type: HIDE_LOADING });
      openNotification("error", `Update category fail!`);
      console.log(error);
    }
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      // dispatch({ type: SHOW_LOADING });
      await catetgoryService.deteleCategory(id);
      openNotification("success", "Delete Category success!");
      dispatch(getAllCatetgoryAction());
      // dispatch({ type: HIDE_LOADING });
    } catch (error) {
      // dispatch({ type: HIDE_LOADING });
      openNotification("error", `Delete category fail!`);
      console.log(error);
    }
  };
};
