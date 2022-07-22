import { baseService } from "./baseService";

export class MomentService extends baseService {
  createMoment = (data) => {
    return this.post(`/api/moment`, data);
  };
  updateMoment = (id, data) => {
    return this.patch(`/api/moment/${id}`, data);
  };
  getAllMoment = (id) => {
    if (id) {
      return this.get(`/api/moment?locatedAt=${id}`);
    }
    return this.get(`/api/moment`);
  };
  getDetailById = (id) => {
    return this.get(`/api/moment/${id}`);
  };
  deteleMoment = (id) => {
    return this.delete(`/api/moment/${id}`);
  };
}

export const momentService = new MomentService();
