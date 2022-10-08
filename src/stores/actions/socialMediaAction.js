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
      const data2 = await socialMediaService.createSocialMediaLink(data);
      if (!data2.data.success) {
        return null;
      }
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
      const data2 = await socialMediaService.updateSocialMediaLink(data, id);
      if (!data2.data.success) {
        return null;
      }

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
      if (id.length !== undefined) {
        await Promise.all(
          id.map(async (item) => {
            await socialMediaService.delSocialMediaLink(item);
          })
        );
      } else {
        await socialMediaService.delSocialMediaLink(id);
      }
      dispatch(getCompanyInfoAction());
      openNotification("success", "Delete social media link successfully");
    } catch (error) {
      console.log(error);
      openNotification("error", "Delete new social media link failed");
    }
  };
};
