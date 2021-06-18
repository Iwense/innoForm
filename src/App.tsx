import React from "react";

import AppRoutes from "./routes/AppRoutes";

import { BrowserRouter } from "react-router-dom";

import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};
export default App;
