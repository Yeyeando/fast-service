// src/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainWaiter from "./pages/MainWaiter";
import MenuWaiter from "./pages/MenuWaiter";
import DishesWaiter from "./pages/DishesWaiter";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWaiter />} />
        <Route path="/MenuWaiter" element={<MenuWaiter />} />
        <Route path="/DishesWaiter" element={<DishesWaiter />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
