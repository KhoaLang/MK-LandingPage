import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { store, persistor } from "./stores/store";

import "antd/dist/antd.min.css";

import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import axios from "axios";
import _ from "lodash";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div>Loading....</div>}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<h1>Loading....</h1>} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
