// Componente que recibe un trabajador y lo muestra

import { useState } from "react";
import { TrabajadorModal } from "./TrabajadorModal";

// Al ser seleccionado un trabajador, se debe mostrar un modal con la descripcion del trabajo a realizar (que sera opcional)

export const ListaTrabajadoresItem = ({ trabajador }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const seleccionarTrabajador = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:text-white">
      <figure>
        <img src="/trabajador.png" alt="Imagen del trabajador" />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize text-2xl">
          {trabajador.nombre} {trabajador.apellido}
        </h2>
        <p className="text-xl">{trabajador.labor}</p>
        <div className="card-actions flex items-center justify-between">
          {/* boton buscar, para redirigir a TrabajadoresLaborPage */}
          <button
            className="btn btn-success text-xl"
            onClick={seleccionarTrabajador}
          >
            Seleccionar
          </button>
          <p className="text-xl">
            {trabajador.rating}
            <div className="flex">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      className="hidden"
                    />
                    <svg
                      className={`w-6 h-6 ${
                        ratingValue <= trabajador.rating
                          ? "text-orange-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12.382l6.447 3.868-1.34-7.795 5.348-5.213-7.4-1.074L10 0 7.945 2.268 0.545 3.342l5.348 5.213-1.34 7.795L10 12.382z" />
                    </svg>
                  </label>
                );
              })}
            </div>
          </p>
        </div>
        <TrabajadorModal
          trabajadorId={trabajador.id}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};
