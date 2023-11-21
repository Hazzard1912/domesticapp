import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { DomesticAppRoutes } from "../domesticapp/routes/DomesticAppRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { LoginPage } from "../auth/pages";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.user);

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<DomesticAppRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
