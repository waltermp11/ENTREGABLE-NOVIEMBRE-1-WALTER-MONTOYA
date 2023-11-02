import { useState } from "react";
import React from "react";



const Formulario = () => {
  //States
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");

//Handler
const handleSubmit = (e) => {
  e.preventDefault();

  if (nombre.length < 3 || color.length < 6) {
    alert("❌❌ Por favor chequea que la información sea correcta ❌❌");
  } else {

    alert("✅✅ Sus datos fueron registrados con Exito! ✅✅" );
    alert(" Hola " +nombre + " tu color favorito es el"+color) ;

    
    ;
  }
};

return (
  <>
    <form onSubmit={handleSubmit}>
      <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            className="input"
            onChange={(e) => setNombre(e.target.value.trimStart())}
      />

      <input
        type="text"
        placeholder="Ingresa tu color favorito (formato HEX)"
        value={color}
        className="input"
        onChange={(e) => setColor(e.target.value)}
      />

      <input type="submit" value="Enviar" className="submit" />
    </form>
  </>
);
}

export default Formulario;
