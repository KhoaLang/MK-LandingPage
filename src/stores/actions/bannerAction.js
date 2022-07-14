import { bannerService } from "../../services/BannerService";
import { openNotification } from "../../utils/Notification";
import { GET_ALL_BANNER, GET_DETAIL_BANNER } from "../types/BannerTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../types/LoadingType";

export const getAllBannerAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await bannerService.getAllBanner(id);
      console.log("data", data.data);
      dispatch({ type: GET_ALL_BANNER, data: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getDetailBannerAction = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await bannerService.getDetailById(id);
      dispatch({ type: GET_DETAIL_BANNER, data: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
export const createBannerAction = (data, resetForm) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      const data1 = await bannerService.createBanner(data);
      console.log("data", data);
      dispatch({ type: HIDE_LOADING });
      // dispatch(getAllCatetgoryAction);
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


export const updateBannerAction = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await bannerService.updateBanner(id, data);
      openNotification("success", "Update banner success!");
      dispatch({ type: HIDE_LOADING });
    } catch (error) {
      dispatch({ type: HIDE_LOADING });
      openNotification("error", `Update banner fail!`);
      console.log(error);
    }
  };
};


export const deleteBannerAction = (id) => {
  return async (dispatch) => {
    try {
      // dispatch({ type: SHOW_LOADING });
      await bannerService.deteleBanner(id);
      openNotification("success", "Delete banner success!");
      dispatch(getAllBannerAction());
      // dispatch({ type: HIDE_LOADING });
    } catch (error) {
      // dispatch({ type: HIDE_LOADING });
      openNotification("error", `Delete banner fail!`);
      console.log(error);
    }
  };
};


