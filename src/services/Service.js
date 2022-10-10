import { baseService } from "./baseService";

export class Service extends baseService {
  createService = (data) => {
    return this.post(`/api/service/create`, data);
  };
  updateService = (id, data) => {
    return this.patch(`/api/service/${id}`, data);
  };
  getAllService = () => {
    return this.get(`/api/service`);
  };
  getServiceDetailById = (id) => {
    return this.get(`/api/service/${id}`);
  };
  deteleService = (id) => {
    return this.delete(`/api/service/${id}`);
  };
}

export const service = new Service();
