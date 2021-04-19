import React from 'react';
import ReactDOM from 'react-dom';


const funcion = elemento => elemento+2;
const exaple = <div>
  <h1>Hola paulis____ {funcion(2)}</h1>
  </div>;


const container = document.getElementById('app');
ReactDOM.render(exaple , container);

