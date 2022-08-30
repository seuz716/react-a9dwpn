import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rutas from './Router.js';
import './style.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Rutas />
      </BrowserRouter>
    </>
  );
}
