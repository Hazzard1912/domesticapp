// Componente que recibe un trabajador y lo muestra

import { useState } from "react";
import { TrabajadorModal } from "./TrabajadorModal";

// Al ser seleccionado un trabajador, se debe mostrar un modal con la descripcion del trabajo a realizar (que sera opcional)

export const ListaTrabajadoresItem = ({ trabajador }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const seleccionarTrabajador = () => {
    setIsModalOpen(true);
  }

  return (
    <div>
      <h3>
        {trabajador.nombre} {trabajador.apellido}
      </h3>
      <p>{trabajador.labor}</p>
      <p>Estrellas: {trabajador.rating}</p>
      <button onClick={seleccionarTrabajador}>Seleccionar</button>
      <TrabajadorModal trabajadorId={trabajador.id} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
