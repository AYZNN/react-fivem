import "./styles/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "@/components/layout.tsx";
import App from "@/components/app.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
