import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../domesticapp/pages/HomePage";
import { DomesticAppRoutes } from "../domesticapp/routes/DomesticAppRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.user);

  return (
    <Routes>
      {status === "authenticated" ? (
        <>
          <Route path="/domesticapp/*" element={<DomesticAppRoutes />} />
          <Route path="/*" element={<Navigate to="/domesticapp" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      )}

    </Routes>
  );
};
