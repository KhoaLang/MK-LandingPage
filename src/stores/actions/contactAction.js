import { contactService } from "../../services/ContactService";
import { openNotification } from "../../utils/Notification";

export const getAllContactAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await contactService.getAllContact();

      dispatch({ type: "GET_ALL_CONTACT", data: data.data });
    } catch (error) {
      openNotification("error", `Get fail!`);
      console.log(error);
    }
  };
};

export const createContactAction = (dataForm, resetFields) => {
  return async (dispatch) => {
    try {
      await contactService.createContact(dataForm);

      dispatch(getAllContactAction());
      openNotification("success", "Create new message success!");
      resetFields();
    } catch (error) {
      openNotification("error", `Create fail!`);
      console.log(error);
    }
  };
};
export const deleteContactAction = (id) => {
  return async (dispatch) => {
    try {
      if (id.length !== undefined) {
        await Promise.all(
          id.map(async (item) => {
            await contactService.deteleContact(item);
          })
        );
      } else {
        await contactService.deteleContact(id);
      }

      dispatch(getAllContactAction());
      openNotification("success", "Delete message success!");
    } catch (error) {
      openNotification("error", `Delete fail!`);
      console.log(error);
    }
  };
};
