// Componente encargado de recibir la lista de labores y mostrarlas mediante child components

import { ListaLaboresItem } from "./ListaLaboresItem";

// Array de labores dummy:
const labores = [
  {
    id: 1,
    nombre: "Servicio de limpieza",
  },
  {
    id: 2,
    nombre: "Servicio de reparación",
  },
  {
    id: 3,
    nombre: "Servicio de jardinería",
  },
  {
    id: 4,
    nombre: "Servicio de plomería",
  },
];

// Lista de trabajadores dummy, asociados a una labor
const trabajadores = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    labor: "Servicio de limpieza",
  },
  {
    id: 3,
    nombre: "Pablo",
    apellido: "Perez",
    labor: "Servicio de jardinería",
  },
];

export const ListaLabores = () => {
  // Esto se hace a modo de ejemplo, pero la lista debe de llegar filtrada desde el backend
  // Carga solamente las labores para las que hay trabajadores disponibles

  const laboresDisponibles = labores.filter((labor) => {
    return trabajadores.some((trabajador) => {
      return trabajador.labor === labor.nombre;
    });
  });

  return (
    // Implementacion basica, esto se debe recibir del backend

    <div className="flex flex-wrap justify-center p-4 gap-4">
      {/* Mapeamos y mostramos las labores de momento en un div */}
      {laboresDisponibles.map((labor) => {
        return (
          <div className="m-2 shadow-lg">
            <ListaLaboresItem key={labor.id} labor={labor} />
          </div>
        );
      })}
    </div>
  );
};
