import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { postReducer } from "./postReducer";
import { loadingReducer } from "./loadingReducer";

const rootReducer = combineReducers({
  categoryReducer,
  loadingReducer,
  postReducer,
});

export default rootReducer;
