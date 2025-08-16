
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./Home";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Gift">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
