import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProSidebarProvider } from "react-pro-sidebar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
    <App />
=======
  <React.StrictMode>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  </React.StrictMode>
>>>>>>> 2561187220f6ea81bdb14f01edb337f7fc8b27f3
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
