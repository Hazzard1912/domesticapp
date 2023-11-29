import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

import "../styles/TrabajadorModal.css";

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
    setDescripcion("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Trabajador Modal"
      className="flex items-center justify-center outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      style={{
        content: {
          position: "relative",
          width: "500px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <div className="modal_container">
        <h2 className="modal_title">Descripcion del trabajo</h2>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none text-xl"
          rows="4"
        />
        <div className="flex justify-end">
          <button onClick={agregarDescripcion} className="modal_button">
            Contratar
          </button>
        </div>
      </div>
    </Modal>
  );
};
