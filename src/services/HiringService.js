import { baseService } from "./baseService";

export class HiringService extends baseService {
  createHiring = (data) => {
    return this.post(`/api/career`, data);
  };
  getAllHiring = (keyString, type) => {
    if (keyString || type) {
      console.log("ds-ad-sa-d-sad-sa-d-sa-");
      console.log(keyString, type);

      return this.get(`/api/career?keyString=${keyString}&type=${type}`);
    }
    console.log(keyString, type, "server");
    return this.get(`/api/career`);
  };
  getDetailById = (id) => {
    return this.get(`/api/career/${id}`);
  };
  updateHiring = (id, data) => {
    return this.patch(`/api/career/${id}`, data);
  };
  deteleHiring = (id) => {
    return this.delete(`/api/career/${id}`);
  };
}

export const hiringService = new HiringService();
