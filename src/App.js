import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LayoutRoute from "./layout/layoutRoute.js";
import NotFoundPage from "./shared/404page";
import AccountPage from "./pages/accounts/index";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Navigate to="/admin/dashboard/account" />}
      />
      <Route path="/admin/dashboard/account" element={<AccountPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
