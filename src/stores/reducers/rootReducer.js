import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { loadingReducer } from "./loadingReducer";
import { bannerReducer } from "./bannerReducer";
import { pageReducer } from "./pageReducer";

const rootReducer = combineReducers({
  categoryReducer,
  loadingReducer,
  bannerReducer,
  pageReducer,
});

export default rootReducer;
