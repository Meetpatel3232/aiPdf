import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import App from "./App";
import { UploadProvider } from "./context/UploadContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UploadProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
        }}
      />
    </UploadProvider>
  </React.StrictMode>,
);
