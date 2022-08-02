import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getUsers } from "./actions/users.action";

//devtools
import { composeWithDevTools } from "redux-devtools-extension";

const root = createRoot(document.getElementById("root"));
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getUsers());

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
