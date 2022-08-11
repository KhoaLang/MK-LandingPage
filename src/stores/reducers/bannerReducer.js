import { DOMAIN } from "../../utils/constants";
import { GET_ALL_BANNER, GET_DETAIL_BANNER } from "../types/BannerTypes";

const initialState = {
  listBanner: [],
  bannerDetail: "",
  url: "",
};

export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BANNER:
      return { ...state, listBanner: action.data };
    case GET_DETAIL_BANNER:
      return {
        ...state,
        bannerDetail: action.data,
        url: `${DOMAIN}/api/image/${action.data.image}`,
      };

    default:
      return state;
  }
};
