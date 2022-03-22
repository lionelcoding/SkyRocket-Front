import { combineReducers } from 'redux';
import postReducer from './post.reducer';
import allPostsReducer from './allPosts.reducer';
import userReducer from './user.reducer';

export default combineReducers({
  userReducer,
   postReducer,
  allPostsReducer,
});