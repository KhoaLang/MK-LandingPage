import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { loadingReducer } from "./loadingReducer";

const rootReducer = combineReducers({
  categoryReducer,loadingReducer
});

export default rootReducer;
