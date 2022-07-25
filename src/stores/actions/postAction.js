import { postService } from "../../services/PostService";
import { openNotification } from "../../utils/Notification";
import { GET_ALL_POST, GET_DETAIL_POST } from "../types/PostTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../types/LoadingType";

export const getAllPostAction = (id = "") => {
  return async (dispatch) => {
    try {
      const { data } = await postService.getAllPost(id);
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

export const getPostDetailAction = (id, setFileList) => {
  return async (dispatch) => {
    try {
      const { data } = await postService.getPostDetailById(id);
      dispatch({ type: GET_DETAIL_POST, data: data.data });
      setFileList([
        {
          url: `${process.env.REACT_APP_BACKEND_BASE_URL}${data.data.image}`,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };
};
export const updatePostAction = (id, data, resetForm) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await postService.updatePost(id, data);
      dispatch(getAllPostAction);
      resetForm();

      dispatch({ type: HIDE_LOADING });
      openNotification("success", "Change Post success!");
    } catch (error) {
      console.error(error);
    }
  };
};
export const deletePostAction = (id) => {
  return async (dispatch) => {
    try {
      await postService.detelePost(id);
      dispatch(getAllPostAction);

      openNotification("success", "Delete post success!");
    } catch (error) {
      console.error(error);
    }
  };
};
