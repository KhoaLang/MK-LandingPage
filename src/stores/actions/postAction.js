import { postService } from "../../services/PostService";
import { openNotification } from "../../utils/Notification";
import { GET_ALL_POST, GET_DETAIL_POST } from "../types/PostTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../types/LoadingType";

export const getAllPostAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await postService.getAllPost();
      dispatch({ type: GET_ALL_POST, data: data.data });
    } catch (error) {
      // console.log(error.response?.data);
    }
  };
};

export const createPostAction = (data, resetForm) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await postService.createPost(data);
      dispatch({ type: HIDE_LOADING });
      dispatch(getAllPostAction);
      resetForm();

      openNotification("success", "Create Post success!");
      // dispatch({ type: HIDE_LOADING });
    } catch (error) {
      openNotification("error", `Create fail!`);
      dispatch({ type: HIDE_LOADING });
      // console.log(error.response?.data);
    }
  };
};
