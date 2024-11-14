// src/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainWaiter from "./pages/MainWaiter";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWaiter />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
