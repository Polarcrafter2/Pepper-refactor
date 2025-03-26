import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { MainMenuPage } from "./pages/MainMenuPage";
// Import other pages as we create them

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main-menu" element={<MainMenuPage />} />
        {/* Add other routes as we create them */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
