import { useState } from "react";
import { deletePerson } from "../services/api";
import { useNavigate } from "react-router-dom";

const Baja = () => {
  const [id, setId] = useState(0);

  const navigate = useNavigate();

  const darDeBaja = () => {
    deletePerson(id)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al guardar la persona:", error);
      });
  };

  return (
    <div>
      <h1>Dar de Baja</h1>
      <input
        type="number"
        onChange={(e) => setId(e.target.value)}
        placeholder="Id Persona"
      />
      <button onClick={darDeBaja}>Baja</button>
    </div>
  );
};

export default Baja;
