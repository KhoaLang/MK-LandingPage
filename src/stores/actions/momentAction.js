import { momentService } from "../../services/momentService";
import { openNotification } from "../../utils/Notification";
import { GET_ALL_BANNER, GET_DETAIL_BANNER } from "../types/BannerTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../types/LoadingType";
import { GET_ALL_MOMENT, GET_DETAIL_MOMENT } from "../types/MomentTypes";

export const getAllMomentAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await momentService.getAllMoment(id);
      dispatch({ type: GET_ALL_MOMENT, data: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getDetailMomentAction = (id, setFileList, navigate) => {
  return async (dispatch) => {
    try {
      const { data } = await momentService.getDetailById(id);
      setFileList([
        {
          url: `${process.env.REACT_APP_BACKEND_BASE_URL_NO_IMAGE}/api/image/${data.data.image[0]}`,
        },
      ]);
      dispatch({ type: GET_DETAIL_MOMENT, data: data.data });
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        navigate("/not-found");
      }
    }
  };
};
export const createMomentAction = (data, resetForm, setFileList) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await momentService.createMoment(data);
      dispatch({ type: HIDE_LOADING });
      // dispatch(getAllCatetgoryAction);
      resetForm();
      setFileList([]);

      openNotification("success", "Create moment success!");
      // dispatch({ type: HIDE_LOADING });
    } catch (error) {
      openNotification("error", `Create banner fail!`);
      dispatch({ type: HIDE_LOADING });
      console.log(error);
    }
  };
};

export const updateMomentAction = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await momentService.updateMoment(id, data);
      dispatch(getAllMomentAction);
      openNotification("success", "Update moment success!");
      dispatch({ type: HIDE_LOADING });
    } catch (error) {
      dispatch({ type: HIDE_LOADING });
      openNotification("error", `Update moment fail!`);
      console.log(error);
    }
  };
};

export const deleteMomentAction = (id) => {
  return async (dispatch) => {
    try {
      // dispatch({ type: SHOW_LOADING });
      await momentService.deteleMoment(id);
      openNotification("success", "Delete moment success!");
      dispatch(getAllMomentAction());
      // dispatch({ type: HIDE_LOADING });
    } catch (error) {
      // dispatch({ type: HIDE_LOADING });
      openNotification("error", `Delete moment fail!`);
      console.log(error);
    }
  };
};
