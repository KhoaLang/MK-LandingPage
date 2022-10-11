import { baseService } from "./baseService";

export class ContactService extends baseService {
  createContact = (data) => {
    return this.post(`/api/leaveMessage/create`, data);
  };
  getAllContact = () => {
    return this.get(`/api/leaveMessage`);
  };
  getContactDetailById = (id) => {
    return this.get(`/api/leaveMessage/${id}`);
  };
  deteleContact = (id) => {
    return this.delete(`/api/leaveMessage/${id}`);
  };
}

export const contactService = new ContactService();
