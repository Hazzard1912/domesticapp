import { FaSearch } from "react-icons/fa";
import "../styles/Search.css";
import { useState } from "react";

export const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Limpieza de busqueda
      const cleannedSearch = search.trim().toLowerCase();
      
      // Aqui se puede hacer la busqueda en la api
      console.log("Busqueda: ", cleannedSearch);
    }
  }

  return (
      <div className="search_container">
        <input
          type="text"
          placeholder="Buscar un servicio"
          className="search_box"
          value={search}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
        <FaSearch className="search_icon" />
      </div>
  );
};
