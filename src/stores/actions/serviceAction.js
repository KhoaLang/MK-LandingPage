import { service } from "../../services/Service";
import { openNotification } from "../../utils/Notification";

export const createServiceAction = (dataForm) => {
  return async (dispatch) => {
    try {
      await service.createService(dataForm);
      dispatch({ type: "GET_ALL_SERVICES", data: dataForm });
      openNotification("success", "Create service success!");
    } catch (error) {
      openNotification("error", `Create fail!`);
    }
  };
};
export const getAllServiceAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await service.getAllService();
      dispatch({ type: "GET_ALL_SERVICES", data: data.data });
    } catch (error) {}
  };
};
// export const getDetailServiceAction = (id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await catetgoryService.getDetailById(id);
//       dispatch({ type: GET_DETAIL_CATEGORY, data: data.data });
//     } catch (error) {}
//   };
// };

export const updateServiceAction = (id, dataForm) => {
  return async (dispatch) => {
    try {
      await service.updateService(id, dataForm);
      dispatch(getAllServiceAction());
      openNotification("success", "Update service success!");
    } catch (error) {
      openNotification("error", `Update service fail!`);
      console.log(error);
    }
  };
};

export const deleteService = (id) => {
  return async (dispatch) => {
    try {
      await service.deteleService(id);
      openNotification("success", "Delete service success!");
      dispatch(getAllServiceAction());
    } catch (error) {
      openNotification("error", `Delete service fail!`);
      console.log(error);
    }
  };
};
