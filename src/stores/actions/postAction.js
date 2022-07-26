import { postService } from "../../services/PostService";
import { openNotification } from "../../utils/Notification";
import {
  FETCH_POST,
  FETCH_POST_FAIL,
  GET_ALL_POST,
  GET_DETAIL_POST,
} from "../types/PostTypes";
import { HIDE_LOADING, SHOW_LOADING } from "../types/LoadingType";

export const getAllPostAction = (id = "", setState) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POST });
    try {
      const { data } = await postService.getAllPost(id);
      dispatch({ type: GET_ALL_POST, data: data.data });
      if (setState) {
        let pageSize = 5;
        setState({
          data: data.data?.filter((category) => category.isVisible === true),
          totalPage: data.data.length / pageSize,
          minIndex: 0,
          maxIndex: pageSize,
        });
      }
    } catch (error) {
      // console.log(error.response?.data);
      dispatch({ type: FETCH_POST_FAIL });
    }
  };
};

export const getFilterPost = (id = "", setState) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_POST });
    try {
      const { data } = await postService.getAllPost(id);
      dispatch({ type: "POST_FILTER", data: data.data });
      if (setState) {
        let pageSize = 5;
        setState({
          data: data.data?.filter((category) => category.isVisible === true),
          totalPage: data.data.length / pageSize,
          minIndex: 0,
          maxIndex: pageSize,
        });
      }
    } catch (error) {
      // console.log(error.response?.data);
      dispatch({ type: FETCH_POST_FAIL });
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
export const updatePostAction = (id, data, resetForm = null) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADING });
      await postService.updatePost(id, data);
      dispatch(getAllPostAction);
      resetForm !== null && resetForm();

      dispatch({ type: HIDE_LOADING });
      openNotification("success", "Update Post success!");
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
export const filterPostAction = (
  keyString = "",
  categoryId = "",
  startDate = "",
  endDate = "",
  sort = 1
) => {
  return async (dispatch) => {
    try {
      let formData = {
        keyString,
        category: categoryId,
        createdAt: { startDate, endDate },
        sort,
      };
      console.log(formData);
      let { data } = await postService.filterPost(formData);
      dispatch({ type: GET_ALL_POST, data: data.data });
    } catch (error) {
      console.error(error);
    }
  };
};
