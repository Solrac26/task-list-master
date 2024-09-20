/**
 * @file Header.jsx
 * @description Este componente define el encabezado de la aplicación.
 * Contiene un título que describe la funcionalidad principal de la aplicación.
 * 
 * Importa el archivo de estilos CSS para aplicar estilos específicos al encabezado.
 */

import React from 'react';
import './Header.css';

/**
 * Header es un componente funcional que renderiza el encabezado de la aplicación.
 * 
 * @function Header
 * @returns {JSX.Element} JSX que representa el encabezado con un título.
 */
function Header() {
  return (
    // El elemento <header> es una etiqueta semántica de HTML5 que define el encabezado de una sección o página.
    // La clase "header" se usa para aplicar estilos definidos en el archivo Header.css.
    <header className="header">
      {/* <h1> se utiliza para mostrar el título principal del encabezado */}
      <h1>Taskly</h1>
    </header>
  );
}

// Exporta el componente Header para que pueda ser importado y utilizado en otros archivos.
export default Header;
