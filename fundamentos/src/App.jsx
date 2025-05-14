// App.jsx El componente principal de la aplicación
// Un componente en React es una función que devuelve contenido HTML

import { Fragment, useState } from "react";

// Sintaxis de JSX
export function App() {
  return (
    // JSX: JavaScript XML
    <>
      <Fragment>
        <div>
          {/* Elementos JSX */}
          <h1>Hola Mundo</h1>
        </div>
      </Fragment>
    </>
  );
}

export default App;
