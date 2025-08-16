import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold text-green-700">
        Welcome to Dashboard!
      </h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Gift">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
