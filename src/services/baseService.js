import Axios from "axios";
import { TOKEN } from "../utils/constants";

export class baseService {
  //put json về phía backend
  put = (url, model) => {
    return Axios({
      url: `${process.env.REACT_APP_BACKEND_BASE_URL_NO_IMAGE}${url}`,
      method: "PUT",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //JWT
    });
  };
  patch = (url, model) => {
    return Axios({
      url: `${process.env.REACT_APP_BACKEND_BASE_URL_NO_IMAGE}${url}`,
      method: "PATCH",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //JWT
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${process.env.REACT_APP_BACKEND_BASE_URL_NO_IMAGE}${url}`,
      method: "POST",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //JWT
    });
  };

  get = (url) => {
    return Axios({
      url: `${process.env.REACT_APP_BACKEND_BASE_URL_NO_IMAGE}${url}`,
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url) => {
    return Axios({
      url: `${process.env.REACT_APP_BACKEND_BASE_URL_NO_IMAGE}${url}`,
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}
