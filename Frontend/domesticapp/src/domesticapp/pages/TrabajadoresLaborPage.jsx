import { useParams } from "react-router-dom";
import { ListaTrabajadores } from "../components/ListaTrabajadores";
import { useEffect, useState } from "react";
import { DomesticAppLayout } from "../layout/DomesticAppLayout";

export const TrabajadoresLaborPage = () => {
  const { id } = useParams();

  // Usaremos el filtrado de datos aqui, ya que este componente le pasara los trabajadores ya rankeados a ListaTrabajadores
  const [criterio, setCriterio] = useState("rating");
  const [trabajadores, setTrabajadores] = useState([]);

  // Necesitaremos un useEffect para re-renderizar la lista de trabajadores cada vez que se cambie el criterio de ordenamiento
  useEffect(() => {
    // Aqui ya recibiriamos todo ordenado desde la api, simplemente llamando a un endpoint con labor id y criterio
    // Ejemplo de funcion que llama a la api
    // obtenerTrabajadores(laborId, criterio).

    // Ejemplo de endpoint que recibe labor id y criterio
    // /api/trabajadores/:laborId?ordenarPor=criterio

    // Ejemplo de lista de trabajadores ordenados por rating
    const listaTrabajadores = [
      {
        id: 1,
        nombre: "Juan",
        apellido: "Perez",
        labor: "Cocina",
        rating: 5,
      },
      {
        id: 2,
        nombre: "Pedro",
        apellido: "Gonzalez",
        labor: "Cocina",
        rating: 4,
      },
      {
        id: 3,
        nombre: "Maria",
        apellido: "Garcia",
        labor: "Cocina",
        rating: 3,
      },
      {
        id: 4,
        nombre: "Jose",
        apellido: "Lopez",
        labor: "Cocina",
        rating: 2,
      },
      {
        id: 5,
        nombre: "Ana",
        apellido: "Martinez",
        labor: "Cocina",
        rating: 1,
      },
    ];

    setTrabajadores(listaTrabajadores);
  }, [criterio]);

  return (
    <DomesticAppLayout>
      <div className="min-h-screen p-4 bg-gray-200">
        <div className="w-full max-w-6xl mx-auto flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-sky-600 mb-8 text-center">
            Labor {id}
          </h1>
          <div role="tablist" className="tabs tabs-bordered">
            <a role="tab" className={`tab text-xl text-slate-600 capitalize ${criterio === "rating" ? "tab-active" : ""}`} onClick={() => setCriterio("rating")}>
              Mejor rating
            </a>
            <a
              role="tab"
              className={`tab text-xl text-slate-600 capitalize ${criterio === "distancia" ? "tab-active" : ""}`}
              onClick={() => setCriterio("distancia")}
            >
              Menor distancia
            </a>
            <a role="tab" className={`tab text-xl text-slate-600 capitalize ${criterio === "precio" ? "tab-active" : ""}`} onClick={() => setCriterio("precio")}>
              Mejor precio
            </a>
          </div>
          <ListaTrabajadores trabajadores={trabajadores} />
        </div>
      </div>
    </DomesticAppLayout>
  );
};
