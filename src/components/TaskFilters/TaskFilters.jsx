import React from 'react';

/**
 * @file TaskFilters.jsx
 * @description Este componente permite a los usuarios filtrar las tareas por categoría y estado.
 * Importa los estilos desde 'TaskFilters.css'.
 */

/* eslint-disable react/prop-types */
// La línea anterior desactiva temporalmente las advertencias de ESLint relacionadas con las prop-types. 
// Esto es útil si las prop-types no se están utilizando pero se planea hacerlo más adelante.

import './TaskFilters.css';

/**
 * TaskFilters es un componente funcional que renderiza dos selectores (<select>).
 * Estos selectores permiten al usuario filtrar las tareas por categoría y estado.
 * 
 * @function TaskFilters
 * @param {Object} props - Las propiedades recibidas por el componente.
 * @param {Function} props.setFilterCategory - Función para actualizar el filtro de categoría.
 * @param {Function} props.setFilterStatus - Función para actualizar el filtro de estado.
 * @returns {JSX.Element} JSX que representa los filtros de categoría y estado.
 */
function TaskFilters({ setFilterCategory, setFilterStatus}) {
  return (
    // Contenedor principal para los selectores de filtros, con la clase CSS "task-filters".
    <div className="task-filters">
      {/* Primer selector para filtrar las tareas por categoría */}
      <select onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="">Todas las categorías</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Personal">Personal</option>
        <option value="Hogar">Hogar</option>
      </select>

      {/* Segundo selector para filtrar las tareas por estado */}
      <select onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="">Todos los estados</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </select>
    </div>
  );
}

// Exporta el componente TaskFilters para que pueda ser utilizado en otros archivos.
export default TaskFilters;
