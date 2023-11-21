import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, RegisterPage } from "../pages";
import { RegisterWorkerPage } from "../pages/RegisterWorkerPage";

export const AuthRoutes = () => {

  return (
    <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register-user" element={<RegisterPage />} />
          <Route path="register-worker" element={<RegisterWorkerPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
