import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";

import Layout from "./components/Layout";
import Page from "./features/notes/Page";

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
