// Componente encargado de recibir una labor y mostrarla
// Al recibir click, debe de redirigir a la vista TrabajadoresLaborPage
import { Link } from "react-router-dom";

export const ListaLaboresItem = ({ labor }) => {
  return (
    // Mostrar la labor recibida
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/servicio.png" alt="Imagen del servicio" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{labor.nombre}</h2>
          <div className="card-actions justify-start pt-2">
            {/* boton buscar, para redirigir a TrabajadoresLaborPage */}
            <Link to={`/trabajadores/${labor.id}`} className="btn btn-primary text-xl">
              Buscar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
