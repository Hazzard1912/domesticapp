import { useParams } from "react-router-dom";
import { ListaTrabajadores } from "../components/ListaTrabajadores";
import { useEffect, useState } from "react";

export const TrabajadoresLaborPage = () => {
  // Recibimos el id de la labor a cargar y se lo pasamos a ListaTrabajadores
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
    <>
      <h1>TrabajadoresLaborPage: Labor {id}</h1>
      <button onClick={() => setCriterio('rating')}>Clasificar por rating - </button>
      <button onClick={() => setCriterio('distancia')}>Clasificar por menor distancia - </button>
      <button onClick={() => setCriterio('precio')}>Clasificar por precio</button>
      <ListaTrabajadores trabajadores={trabajadores} />
    </>
  );
};
