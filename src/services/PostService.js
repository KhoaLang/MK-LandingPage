import { baseService } from "./baseService";

export class PostService extends baseService {
  createPost = (data) => {
    return this.post(`/api/poster/create`, data);
  };
  updatePost = (id, data) => {
    return this.patch(`/api/poster/${id}`, data);
  };
  getAllPost = () => {
    return this.get(`/api/poster`);
  };
  getPostDetailById = (id) => {
    return this.get(`/api/poster/${id}`);
  };
  detelePost = (id) => {
    return this.delete(`/api/poster/${id}`);
  };
  filterPost = (data) => {
    return this.post(`/api/poster/filter`, data);
  };
}

export const postService = new PostService();
