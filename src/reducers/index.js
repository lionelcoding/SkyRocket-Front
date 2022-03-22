import { combineReducers } from 'redux';
import postReducer from './post.reducer';
import allPostsReducer from './allPosts.reducer';

export default combineReducers({
  postReducer,
  allPostsReducer,
});