import { baseService } from "./baseService";

class ProductService extends baseService {
  createProduct = (data) => {
    return this.post(`/api/project/create`, data);
  };
  updateProduct = (id, data) => {
    return this.patch(`/api/project/${id}`, data);
  };
  getAllProduct = (id) => {
    return this.get(`/api/project`);
  };
  deteleProduct = (id) => {
    return this.delete(`/api/project/${id}`);
  };
}

export const productService = new ProductService();
