import { baseService } from "./baseService";

export class CatetgoryService extends baseService {
  createCategory = (data) => {
    return this.post(`/api/category`, data);
  };
  updateCategory = (id, data) => {
    return this.patch(`/api/category/${id}`, data);
  };
  getAllCategory = (id = "") => {
    if (id.trim() !== "") {
      return this.get(`/api/category?option=${id}`);
    }
    return this.get(`/api/category`);
  };
  getDetailById = (id) => {
    return this.get(`/api/category/${id}`);
  };
  deteleCategory = (id) => {
    return this.delete(`/api/category/${id}`);
  };
}

export const catetgoryService = new CatetgoryService();
