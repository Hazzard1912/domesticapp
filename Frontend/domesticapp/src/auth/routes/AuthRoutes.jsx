import { Navigate, Route, Routes } from "react-router-dom";

import { LoginPage, RegisterPage } from "../pages";
import { RegisterWorkerPage } from "../pages/RegisterWorkerPage";
import { useSelector } from "react-redux";

export const AuthRoutes = () => {
  const { status } = useSelector((state) => state.user);

  return (
    <Routes>
      {status === "authenticated" ? (
        <Navigate to="/" />
      ) : (
        <>
          <Route path="login" element={<LoginPage />} />
          <Route path="register-user" element={<RegisterPage />} />
          <Route path="register-worker" element={<RegisterWorkerPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      )}
    </Routes>
  );
};
