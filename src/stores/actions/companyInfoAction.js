import { companyInformationService } from "../../services/CompanyInformationService";
import { openNotification } from "../../utils/Notification";

export const getCompanyInfoAction = () => {
  return async (dispatch) => {
    try {
      const data = await companyInformationService.getCompanyInfo();

      dispatch({ type: "GET_INFO", data: data.data.payload });
    } catch (err) {
      console.error(err);
    }
  };
};
export const createCompanyInfoAction = (dataForm, navigate) => {
  return async (dispatch) => {
    try {
      const data = await companyInformationService.createCompanyInfo(dataForm);
      if (!data.data.success) {
        openNotification(
          "error",
          "Create new company info was interrupted due to some errors!"
        );
        return null;
      }
      openNotification("success", "Create new company info successfully!");
      dispatch({ type: "GET_INFO", data: data.data.payload });
    } catch (err) {
      console.error(err);
    }
  };
};
