import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { store, persistor } from "./stores/store";
import { Loading } from "./components/Loading";

import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./i18n";
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
