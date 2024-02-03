import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "fontsource-roboto";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <SnackbarProvider maxSnack={2}>
      <App />
    </SnackbarProvider>
  </Router>
);
