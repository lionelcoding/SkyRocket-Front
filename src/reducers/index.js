import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import allPostsReducer from "./allPosts.reducer";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";

export default combineReducers({
  userReducer,
  usersReducer,
  postReducer,
  allPostsReducer,
});
