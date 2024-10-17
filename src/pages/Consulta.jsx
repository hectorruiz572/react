import { useState } from "react";
import { getPersons } from "../services/api";
import { useEffect } from "react";

const Consulta = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    console.log("Llamando a getPersons");
    getPersons()
      .then((persona) => {
        setPersonas(persona.data);
      })
      .catch((err) => {
        console.error("Error en getPersons:", err);
        setPersonas([]);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Personas</h1>
      <table border="1" cellPadding="10" cellSpacing="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {personas.length > 0 ? (
            personas.map((persona) => (
              <tr key={persona.id}>
                <td>{persona.id}</td>
                <td>{persona.nombre}</td>
                <td>{persona.edad}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay personas para mostrar</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Consulta;
