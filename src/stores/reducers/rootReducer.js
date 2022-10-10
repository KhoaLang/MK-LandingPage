import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { postReducer } from "./postReducer";
import { loadingReducer } from "./loadingReducer";
import { bannerReducer } from "./bannerReducer";
import { pageReducer } from "./pageReducer";
import { hiringReducer } from "./hiringReducer";
import { languageReducer } from "./languageReducer";
import { momentReducer } from "./momentReducer";
import { companyInfoReducer } from "./companyInfoReducer";
import { socialMediaLinkReducer } from "./socialMediaLinkReducer";
import { serviceReducer } from "./serviceReducer";

const rootReducer = combineReducers({
  categoryReducer,
  loadingReducer,
  postReducer,
  bannerReducer,
  pageReducer,
  hiringReducer,
  languageReducer,
  momentReducer,
  companyInfoReducer,
  socialMediaLinkReducer,
  serviceReducer,
});

export default rootReducer;
