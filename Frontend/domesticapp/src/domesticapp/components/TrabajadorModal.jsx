import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const TrabajadorModal = ({ trabajadorId, isOpen, onClose }) => {
  const { id: laborId } = useParams();

  // Estado para agregar la descripcion del trabajo a realizar
  const [descripcion, setDescripcion] = useState("");

  // Recuperamos el usuario para llamar al backend y contratar al trabajador (deberia ser el uid, del jwt, del localstorage)
  const { email } = useSelector((state) => state.user);

  const agregarDescripcion = () => {
    // Estos datos se envian al backend como parte de la contratacion
    console.log(
      `Contratando al trabajador ${trabajadorId} para la labor ${laborId} con la descripcion ${descripcion} por el usuario ${email}`
    );

    // Validemos descripcion no vacia y enviamos un valor por defecto
    const descripcionValida = descripcion || "Sin descripcion";

    // Posible endpoint:
    // /api/contratar/:trabajadorId?laborId=laborId&descripcion=descripcionValida&usuario=email

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Descripcion del trabajo</h2>
      <textarea
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button onClick={agregarDescripcion}>Contratar</button>
    </Modal>
  );
};
