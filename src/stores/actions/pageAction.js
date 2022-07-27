import { pageService } from "../../services/PageService";
import { GET_ALL_PAGE } from "../types/PageTypes";

export const getAllPageAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await pageService.getAllPage();
      dispatch({ type: GET_ALL_PAGE, data: data.data });
    } catch (error) {}
  };
};
