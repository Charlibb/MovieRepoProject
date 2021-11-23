import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App.jsx";




ReactDOM.render(<App />, document.getElementById("root"));

/* 

function Componente({titulo, children}){
   return (
    <div >
    <h1>{titulo}</h1>
    <div>{children}</div>
  </div>
  )
}
 */
/* Same as above!!!
function Componente(props){
  console.log(props);
  // const titulo = props.titulo;
  // const contenido = props.contenido;

  const {titulo, contenido} = props; //same as above!!DESTRUCTURING!
  return (
    <div>
    <h1>{titulo}</h1>
    <div>{contenido}</div>
  </div>
  )
} */
