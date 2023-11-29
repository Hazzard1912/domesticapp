import { Navigate, Route, Routes } from "react-router-dom";
import { DomesticAppPage } from "../pages/DomesticAppPage";
import { TrabajadoresLaborPage } from "../pages/TrabajadoresLaborPage";

export const DomesticAppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DomesticAppPage />} />
      <Route path="/trabajadores/:id" element={<TrabajadoresLaborPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
