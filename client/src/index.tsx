import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "./Components/Layout";
import Page from "./Components/Page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout>
      <Page />
    </Layout>
  </React.StrictMode>
);
