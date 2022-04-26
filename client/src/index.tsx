import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";

import Layout from "./Components/Layout";
import Page from "./Components/Page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <Page />
      </Layout>
    </Provider>
  </React.StrictMode>
);
