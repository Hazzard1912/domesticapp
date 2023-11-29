import { FaSearch } from "react-icons/fa";
import { ListaLabores } from "../components/ListaLabores";
import { DomesticAppLayout } from "../layout/DomesticAppLayout";

import "../styles/DomesticAppPage.css";

export const DomesticAppPage = () => {
  return (
    <DomesticAppLayout>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="domesticapp_title">Domesticapp</h1>
        {/* search box */}
        <div className="search_container">
          <input
            type="text"
            placeholder="Buscar un servicio"
            className="search_box"
          />
          <FaSearch className="search_icon"/>
          
        </div>
        <div className="w-full">
          <ListaLabores />
        </div>
      </div>
    </DomesticAppLayout>
  );
};
