import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";

const rootElement = document.getElementById("tsx-root")!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
