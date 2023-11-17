import { Navigate, Route, Routes } from "react-router-dom";
import { DomesticAppPage } from "../pages/DomesticAppPage";

export const DomesticAppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DomesticAppPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
