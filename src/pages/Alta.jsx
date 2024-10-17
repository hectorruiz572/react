import { useState } from "react";
import { savePersonName } from "../services/api";
import { useNavigate } from "react-router-dom";

const Alta = () => {
  const [nombrePersona, setNombrePersona] = useState("");
  const [edadPersona, setEdadPersona] = useState(0);
  const navigate = useNavigate();

  const darDeAlta = () => {
    savePersonName({ nombre: nombrePersona, edad: edadPersona })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al guardar la persona:", error);
      });
  };

  return (
    <div>
      <h1>Dar de Alta</h1>
      <input
        type="text"
        onChange={(e) => setNombrePersona(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="text"
        onChange={(e) => setEdadPersona(parseInt(e.target.value))}
        placeholder="Edad"
      />
      <button onClick={darDeAlta}>Alta</button>
    </div>
  );
};

export default Alta;
