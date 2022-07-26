import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//devtools
import { composeWithDevTools } from "redux-devtools-extension";

const root = createRoot(document.getElementById("root"));
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </Provider>
);
