import "./styles/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "./layout.tsx";
import App from "./app.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
