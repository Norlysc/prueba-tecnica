import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import { CssBaseline } from "@mui/material";
import TasksContextProvider from "./contexts/TasksContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TasksContextProvider>
      <Router />
    </TasksContextProvider>
    <CssBaseline />
  </React.StrictMode>
);
