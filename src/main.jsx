import React from "react";
import ReactDOM from "react-dom/client";
import TodoContextProvider from "./context/todo.context";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
