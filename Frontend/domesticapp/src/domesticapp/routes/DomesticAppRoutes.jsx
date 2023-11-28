import { Navigate, Route, Routes } from "react-router-dom";
import { DomesticAppPage } from "../pages/DomesticAppPage";
import { TrabajadoresLaborPage } from "../pages/TrabajadoresLaborPage";
import { HomePage } from "../pages/HomePage";

export const DomesticAppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<DomesticAppPage />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/trabajadores/:id" element={<TrabajadoresLaborPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
