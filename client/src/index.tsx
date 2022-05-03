import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";

import Layout from "./components/Layout";
import VersionCalculator from "./features/notes/VersionCalculator";
import NotePage from "./features/notes/NotePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <VersionCalculator />
        <NotePage />
      </Layout>
    </Provider>
  </React.StrictMode>
);
