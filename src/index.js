import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getUser } from "./actions/user.actions";
// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import { getPosts } from "./actions/post.actions";
import { BrowserRouter } from "react-router-dom";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUser());
store.dispatch(getPosts());
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);