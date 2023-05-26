import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';

import App from './App';

const root = createRoot( document.getElementById("root") );

root.render(
<React.StrictMode>
    <App />
  </React.StrictMode>
);