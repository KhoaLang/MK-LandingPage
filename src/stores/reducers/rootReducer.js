import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { loadingReducer } from "./loadingReducer";
import { bannerReducer } from "./bannerReducer";
import { pageReducer } from "./pageReducer";
import { hiringReducer } from "./hiringReducer";

const rootReducer = combineReducers({
  categoryReducer,
  loadingReducer,
  bannerReducer,
  pageReducer,
  hiringReducer,
});

export default rootReducer;
