import { baseService } from "./baseService";

export class CompanyInformationService extends baseService {
  createCompanyInfo = (data) => {
    return this.post("/api/companyInfo/new", data);
  };
  updateCompanyInfo = (data) => {
    return this.put("/api/companyInfo/update", data);
  };
  getCompanyInfo = () => {
    return this.get("/api/companyInfo");
  };
}

export const companyInformationService = new CompanyInformationService();
