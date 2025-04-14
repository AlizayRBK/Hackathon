import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";  // Check if LoginPage.js is inside src/pages
import BuyerDashboard from "./pages/BuyerDashboard";  // Check file existence and correct path
import FarmerDashboard from "./pages/FarmerDashboard";  // Check file existence and correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
