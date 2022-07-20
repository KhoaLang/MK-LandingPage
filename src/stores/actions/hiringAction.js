import { hiringService } from "../../services/HiringService";
import { openNotification } from "../../utils/Notification";
import { GET_ALL_HIRING, GET_DETAIL_HIRING } from "../types/HiringTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../types/LoadingType";

export const getAllHiringAction = (keyString, type) => {
  console.log(keyString, type);
  const keyString1 = keyString ? keyString : "";
  const type1 = type ? type : "";
  return async (dispatch) => {
    try {
      const { data } = await hiringService.getAllHiring(keyString1, type1);
      dispatch({ type: GET_ALL_HIRING, data: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const createHiringAction = (data, resetForm, setFileList) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await hiringService.createHiring(data);
      dispatch({ type: HIDE_LOADING });
      // dispatch(getAllCatetgoryAction);
      resetForm();

      openNotification("success", "Create banner success!");
      // dispatch({ type: HIDE_LOADING });
    } catch (error) {
      openNotification("error", `Create banner fail!`);
      dispatch({ type: HIDE_LOADING });
      console.log(error);
    }
  };
};

export const getDetailHiringAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await hiringService.getDetailById(id);
      dispatch({ type: GET_DETAIL_HIRING, data: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateHiringAction = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await hiringService.updateHiring(id, data);
      dispatch(getAllHiringAction)
      openNotification("success", "Update hiring success!");
      dispatch({ type: HIDE_LOADING });
    } catch (error) {
      dispatch({ type: HIDE_LOADING });
      openNotification("error", `Update hiring fail!`);
      console.log(error);
    }
  };
};

export const deleteHiringAction = (id) => {
  return async (dispatch) => {
    try {
      await hiringService.deteleHiring(id);
      openNotification("success", "Delete hiring success!");
      dispatch(getAllHiringAction());
    } catch (error) {
      openNotification("error", `Delete hiring fail!`);
      console.log(error);
    }
  };
};
