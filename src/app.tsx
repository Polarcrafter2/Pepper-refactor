import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/other-route" element={<Component />} /> */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
