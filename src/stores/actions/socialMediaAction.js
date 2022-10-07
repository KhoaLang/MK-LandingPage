import { socialMediaService } from "../../services/SocialMediaService";
import { openNotification } from "../../utils/Notification";
import { getCompanyInfoAction } from "./companyInfoAction";

// export const getAllLinks = () => {
//   return async (dispatch) => {
//     try {
//       const data = await socialMediaService.getSocialMediaLink();
//       dispatch({ type: "GET_LINKS", data: data.data.payload });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
export const createLink = (data) => {
  return async (dispatch) => {
    try {
      await socialMediaService.createSocialMediaLink(data);
      dispatch(getCompanyInfoAction());
      openNotification("success", "Create new social media link successfully");
    } catch (error) {
      console.log(error);
      openNotification("error", "Create new social media link failed");
    }
  };
};
export const updateLink = (data, id) => {
  return async (dispatch) => {
    try {
      await socialMediaService.updateSocialMediaLink(data, id);
      dispatch(getCompanyInfoAction());
      openNotification("success", "Update social media link successfully");
    } catch (error) {
      console.log(error);
      openNotification("error", "Update new social media link failed");
    }
  };
};
export const deleteLink = (id) => {
  return async (dispatch) => {
    try {
      await socialMediaService.delSocialMediaLink(id);
      //   dispatch(getAllLinks());
      dispatch(getCompanyInfoAction());
      openNotification("success", "Delete social media link successfully");
    } catch (error) {
      console.log(error);
      openNotification("error", "Delete new social media link failed");
    }
  };
};
