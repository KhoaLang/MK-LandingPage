import { baseService } from "./baseService";

export class LanguageService extends baseService {
  getAllLanguage = (keyword = "") => {
    if (keyword.trim() !== "") {
      // return this.get(`/api/language-text?option=${keyword}`);
    }
    // return this.get(`/api/language-text`);
  };
  createLanguage = (data) => {
    // return this.post(`/api/language-text`, data);
  };
  getDetailLanguage = (id) => {
    // return this.get(`/api/language-text/${id}`);
  };
  updateLanguage = (id, data) => {
    // return this.patch(`/api/language-text/${id}`,data)
  };
  deleteLanguage = (id) => {
    // return this.delete(`/api/language-text/${id}`)
  };
}

export const languageService = new LanguageService();
