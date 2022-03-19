import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import rootReducer from "./reducers";

// //redux
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import { Provider } from "react-redux";
// import { applyMiddleware } from "redux";
// import { getPosts } from "./actions/post.action";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// store.dispatch(getPosts())

ReactDOM.render(

    <App />
,
  document.getElementById("root")
);
