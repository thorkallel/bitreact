// App.jsx El componente principal de la aplicación
// Un componente en React es una función que devuelve contenido HTML
import "./App.css";

import { Fragment } from "react";
import { MyButton } from "./components/MyButton";
// Sintaxis de JSX
export function App() {
  let isLoggedIn = false;
  let mensaje = "";
  const temas = [
    "Sintaxis JSX",
    "Creacion y anidado de componentes",
    "Renderizado condicional",
    "Renderizado de listas",
    "Agregar estilos",
    "Paso de propiedades o (props) entre componentes",
    "Trabajando con formularios",
    "Manejo de eventos",
  ];

  if (isLoggedIn) {
    mensaje = "Bienvenido de nuevo";
  } else {
    mensaje = "Inicia sesion";
  }

  const myFunction = () => {
    console.log("Click me");
  };

  return (
    // JSX: JavaScript XML
    <>
      <Fragment>
        <div>
          <section>
            {/* Elementos JSX */}
            <h1>Fundamentos de React</h1>
            <p>
              Este espacio tendra el contenido d ela semana de introduccion a
              React.js
            </p>
            <p>Los temas que se abordaran son:</p>
            {/* Lista de temas */}
            <dl>
              <dt>Sintaxis JSX</dt>
              <dd>
                JSX es una sintaxis de JavaScript que permite escribir HTML
                dentro de JavaScript.
              </dd>
              <dt>Creacion y anidado de componentes</dt>
              <dd>
                Los componentes son la unidad fundamental de React. Son piezas
                de UI reutilizables.
              </dd>
              <dt>Renderizado condicional</dt>
              <dd>
                El renderizado condicional es la capacidad de mostrar contenido
                basado en condiciones.
              </dd>
              <dt>Renderizado de listas</dt>
              <dd>
                El renderizado de listas es la capacidad de mostrar una lista de
                elementos.
              </dd>
              <dt>Agregar estilos</dt>
              <dd>
                React proporciona varias formas de agregar estilos a los
                componentes.
              </dd>
              <dt>Paso de propiedades o (props) entre componentes</dt>
              <dd>
                Las props son la forma en que los componentes se comunican entre
                sí.
              </dd>
              <dt>Trabajando con formularios</dt>
              <dd>
                Los formularios son una forma de interactuar con el usuario.
              </dd>
              <dt>Manejo de eventos</dt>
              <dd>
                Los eventos son la forma en que los componentes se comunican
                entre sí.
              </dd>
              <dt>Ciclo de vida de los componentes</dt>
              <dd>
                El ciclo de vida de los componentes es la forma en que los
                componentes se comunican entre sí.
              </dd>
            </dl>
            <hr />
            <h2>Sintaxis JSX</h2>
            <p>
              JSX es una sintaxis de JavaScript que permite escribir HTML dentro
              de JavaScript.
            </p>
            <h2>Creacion y anidado de componentes</h2>
            <p>
              Los componentes son la unidad fundamental de React, es una funcion
              de JavaScript, Son piezas de UI reutilizables, que retorna un
              elemento JSX.
            </p>
            <p>
              <MyButton text="Click me" myFunction={myFunction} />
            </p>
          </section>

          <section>
            <h2>Renderizado condicional</h2>
            <p>
              El renderizado condicional es la capacidad de mostrar contenido
              basado en condiciones.
            </p>
            {/* Renderizado condicional 01 */}
            <p>{mensaje}</p>
            {/* Renderizado condicional 02 */}
            {isLoggedIn && <p>Bienvenido de nuevo</p>}
            {isLoggedIn ? <p>Bienvenido de nuevo</p> : <p>Inicia sesion</p>}
          </section>

          <section>
            <h2>Renderizado de listas</h2>
            <p>
              El renderizado de listas es la capacidad de mostrar una lista de
              elementos.
            </p>
            <p>
              Para recorrer listas en React se utiliza el metodo map, que
              devuelve un nuevo array.
            </p>
            <ul>
              {temas.map((tema) => (
                <li key={tema}>{tema}</li>
              ))}
            </ul>
          </section>

          <section
            style={{ backgroundColor: "blue", padding: "10px", margin: "10px" }}
          >
            {" "}
            <h2 className="title">Agregar estilos</h2>
            <p>
              React proporciona varias formas de agregar estilos a los
              componentes.
            </p>
            <p>
              <MyButton myFunction={myFunction} />
            </p>
          </section>

          <section>
            <h2>Paso de propiedades o (props) entre componentes</h2>
            <p>
              Las props son la forma en que los componentes se comunican entre
              sí.
            </p>
            <p>
              Las props son argumentos que se pasan a los componentes, existe
              una gerarquia de componentes, el componente padre le pasa props al
              componente hijo.
            </p>
            <p>
              <MyButton text="Click me 01 " myFunction={myFunction} />
              <MyButton text="Click me 02" myFunction={myFunction} />
              <MyButton text="Click me 03" myFunction={myFunction} />
            </p>
          </section>
        </div>
      </Fragment>
    </>
  );
}

/* export default App; */
