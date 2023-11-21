// Este componente solo tiene la responsabilidad de mostrar los trabajdores en una lista

import { ListaTrabajadoresItem } from "./ListaTrabajadoresItem";

export const ListaTrabajadores = ({ trabajadores }) => {
  return (
    <div className="flex flex-wrap justify-center p-4 gap-4 pt-8">
      {/* Mapeamos los trabajadores y los mostrariamos en un componente */}
      {trabajadores.map((trabajador) => {
        return (
          <div className="m-2 shadow-lg">
            <ListaTrabajadoresItem
              key={trabajador.id}
              trabajador={trabajador}
            />
          </div>
        );
      })}
    </div>
  );
};
