import { combineReducers } from "redux";
import video from "./video/reducer";



const rootReducer = combineReducers({
  video: video,
});

export default rootReducer;
