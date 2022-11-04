import { baseService } from "./baseService";

export class SocialMediaService extends baseService {
  createSocialMediaLink = (data) => {
    // return this.post("/api/socialMedia/new", data);
  };
  updateSocialMediaLink = (data, id) => {
    // return this.put(`/api/socialMedia/update/${id}`, data);
  };
  getSocialMediaLink = () => {
    // return this.get("/api/socialMedia");
  };
  delSocialMediaLink = (id) => {
    // return this.delete(`/api/socialMedia/${id}`);
  };
}

export const socialMediaService = new SocialMediaService();
