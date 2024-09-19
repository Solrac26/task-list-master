/**
 * @file TaskList.jsx
 * @description Componente para renderizar una lista de tareas.
 * Mapea sobre las tareas recibidas como props y genera un componente `TaskItem` para cada una.
 */

/* eslint-disable react/prop-types */
// Desactiva temporalmente las advertencias de ESLint relacionadas con las prop-types. 
// Esto es útil si las prop-types no se están utilizando pero se planea hacerlo más adelante.

import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

/**
 * TaskList es un componente funcional que renderiza una lista de tareas.
 * Cada tarea se representa mediante un componente `TaskItem`.
 * 
 * @function TaskList
 * @param {Object} props - Las propiedades recibidas por el componente.
 * @param {Array} props.tasks - Array de tareas que se deben renderizar.
 * @param {Function} props.toggleTaskCompletion - Función para alternar el estado de completado de una tarea.
 * @param {Function} props.removeTask - Función para eliminar una tarea.
 * @param {Function} props.editTask - Función para editar una tarea.
 * @returns {JSX.Element} JSX que representa la lista de tareas.
 */
function TaskList({ tasks, toggleTaskCompletion, removeTask, editTask }) {
  return (
    // Contenedor principal para la lista de tareas, con la clase CSS "task-list".
    <ul className="task-list">
      {/* Mapea sobre el array de tareas y renderiza un `TaskItem` para cada tarea */}
      {tasks.map((task, index) => (
        <TaskItem
          key={index} // La clave única `key` ayuda a React a identificar los elementos individuales.
          task={task} // La tarea actual que se va a mostrar.
          index={index} // El índice de la tarea en la lista.
          toggleTaskCompletion={toggleTaskCompletion} // Función para alternar el estado de completado.
          removeTask={removeTask} // Función para eliminar la tarea.
          editTask={editTask} // Función para editar la tarea.
        />
      ))}
    </ul>
  );
}

// Exporta el componente TaskList para que pueda ser importado y utilizado en otros archivos.
export default TaskList;
