// Componente encargado de recibir una labor y mostrarla
// Al recibir click, debe de redirigir a la vista TrabajadoresLaborPage
import { Link } from 'react-router-dom';

export const ListaLaboresItem = ({labor}) => {

  return (
    // Mostrar la labor recibida
    <>
      <h3>{labor.nombre}</h3>
      {/* boton buscar, para redirigir a TrabajadoresLaborPage */}
      <Link to={`/trabajadores/${labor.id}`} className="btn btn-primary">Buscar</Link>
    </>
  )
}
