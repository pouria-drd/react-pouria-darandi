import React from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";

import "./assets/css/index.css";

import { AuthProvider } from "./contexts/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.Fragment>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.Fragment>
);
