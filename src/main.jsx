import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import "./i18n";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
    <React.StrictMode>
        <Suspense fallback="loading">
            <App />
        </Suspense>
    </React.StrictMode>
);
