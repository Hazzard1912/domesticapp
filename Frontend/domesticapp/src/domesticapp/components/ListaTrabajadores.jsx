// Este componente solo tiene la responsabilidad de mostrar los trabajdores en una lista

import { ListaTrabajadoresItem } from "./ListaTrabajadoresItem";

export const ListaTrabajadores = ({trabajadores}) => {

  return (
    <>
      {/* Mapeamos los trabajadores y los mostrariamos en un componente */}
      {trabajadores.map((trabajador) => {
        return (
          // Usar ListaTrabajadoresItem
          <ListaTrabajadoresItem key={trabajador.id} trabajador={trabajador} />
        );
      })}
    </>
  )
}
