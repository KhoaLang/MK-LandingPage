import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { Loading } from "./components/Loading";
import { store } from "./stores/store";

import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loading />}>
    <React.StrictMode>
      <Provider store={store}>
        <ParallaxProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ParallaxProvider>
      </Provider>
    </React.StrictMode>
  </Suspense>
);

reportWebVitals();
