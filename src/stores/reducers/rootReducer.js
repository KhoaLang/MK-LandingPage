import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { postReducer } from "./postReducer";
import { loadingReducer } from "./loadingReducer";
import { bannerReducer } from "./bannerReducer";
import { pageReducer } from "./pageReducer";
import { momentReducer } from "./momentReducer";
import { serviceReducer } from "./serviceReducer";
import { contactReducer } from "./contactReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
  categoryReducer,
  loadingReducer,
  postReducer,
  bannerReducer,
  pageReducer,
  momentReducer,
  serviceReducer,
  contactReducer,
  productReducer,
});

export default rootReducer;
