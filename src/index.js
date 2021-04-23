import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('app');
ReactDOM.render(<App />, container);

