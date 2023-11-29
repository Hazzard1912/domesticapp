// Componente encargado de recibir una labor y mostrarla
// Al recibir click, debe de redirigir a la vista TrabajadoresLaborPage
import { Link } from "react-router-dom";
import "../styles/ListaLaboresItem.css";

export const ListaLaboresItem = ({ labor }) => {
  return (
    // Mostrar la labor recibida
    <>
      <div className="card w-96 bg-base-100 shadow-xl labor_card">
        <figure>
          <div className="labor_img_container"></div>
          <img src="/servicio.png" alt="Imagen del servicio" className="labor_img"/>
        </figure>
        <div className="card-body">
          <h2 className="card_title">{labor.nombre}</h2>
          <div className="card-actions justify-start pt-2">
            {/* boton buscar, para redirigir a TrabajadoresLaborPage */}
            <Link
              to={`/domesticapp/trabajadores/${labor.id}`}
              className="button_lista_labores"
            >
              Buscar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
