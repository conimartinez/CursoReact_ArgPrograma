// Componente Contador
import React, { useState, Fragment } from "react";

// funcion con manejo de estados
const Contador = () => {
  // inicializando variable
  const [numero, setNumero] = useState(0);

  // definicion de funcion que aumenta el valor del contador
  const aumentar = () => {
    console.log("hice click");
    setNumero(numero + 1);
  };

  //   uso de la variable
  return (
    <div className="App">
      <h1>Mostrar contador</h1>
      <Contador />
    </div>
  );
};
