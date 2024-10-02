/**
 * @file TaskSearch.jsx
 * @description Componente para buscar tareas en la lista.
 * Proporciona un campo de entrada para que el usuario ingrese un término de búsqueda.
 * Llama a la función `setSearchQuery` para actualizar el estado de búsqueda.
 */

/* eslint-disable react/prop-types */
// Desactiva temporalmente las advertencias de ESLint relacionadas con las prop-types. 
// Esto es útil si las prop-types no se están utilizando pero se planea hacerlo más adelante.
import React from 'react';
import './TaskSearch.css';

/**
 * TaskSearch es un componente funcional que renderiza un campo de búsqueda.
 * Permite al usuario buscar tareas ingresando texto, lo que actualiza el estado de búsqueda.
 * 
 * @function TaskSearch
 * @param {Object} props - Las propiedades recibidas por el componente.
 * @param {Function} props.setSearchQuery - Función para actualizar el término de búsqueda.
 * @returns {JSX.Element} JSX que representa el campo de búsqueda.
 */
const TaskSearch = ({ setSearchQuery }) => { // Cambiado de setSearchValue a setSearchQuery
  // Elimina searchValue si no lo estás usando
  const handleSearchValueChange = (event) => {
    setSearchQuery(event.target.value); // Cambiado de setSearchValue a setSearchQuery
  };

  return (
    // Contenedor principal para el campo de búsqueda, con la clase CSS "task-search".
    <div className="task-search">
      {/* Campo de entrada para ingresar el término de búsqueda */}
      <input
        type="text" // Tipo de entrada de texto.
        placeholder="Buscar tareas..." // Texto que se muestra cuando el campo está vacío.
        onChange={handleSearchValueChange} // Evento para manejar los cambios de entrada.
      />
    </div>
  );
};

// Exporta el componente TaskSearch para que pueda ser importado y utilizado en otros archivos.
export default TaskSearch;
