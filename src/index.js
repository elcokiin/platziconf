import React from 'react';
import ReactDOM from 'react-dom';

import BadgeNew from './pages/BadgeNew';
import Badge from './pages/Badge';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('app');
ReactDOM.render(<Badge />, container);

