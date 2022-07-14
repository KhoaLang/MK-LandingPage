import { baseService } from "./baseService";

export class PageService extends baseService {
  createPage = (data) => {
    return this.post(`/api/page`, data);
  };
  updatePage = (id, data) => {
    return this.patch(`/api/page/${id}`, data);
  };
  getAllPage = () => {
    return this.get(`/api/page`);
  };
  getDetailById = (id) => {
    return this.get(`/api/page/${id}`);
  };
  detelePage = (id) => {
    return this.delete(`/api/page/${id}`);
  };
}

export const pageService = new PageService();
