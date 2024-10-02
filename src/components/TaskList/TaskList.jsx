import React, { useState } from 'react'; // Importar useState

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
 * @param {Function} props.updateTaskOrder - Función para actualizar el orden de las tareas.
 * @returns {JSX.Element} JSX que representa la lista de tareas.
 */
function TaskList({ tasks, toggleTaskCompletion, removeTask, editTask, updateTaskOrder }) {
  const [draggedIndex, setDraggedIndex] = useState(null); // Estado para el índice de la tarea arrastrada

  const handleDragStart = (index) => {
    setDraggedIndex(index); // Guardar el índice de la tarea arrastrada
  };

  const handleDrop = (index) => {
    if (draggedIndex !== null) {
      const updatedTasks = [...tasks];
      const [movedTask] = updatedTasks.splice(draggedIndex, 1); // Eliminar la tarea arrastrada
      updatedTasks.splice(index, 0, movedTask); // Insertar la tarea en la nueva posición
      updateTaskOrder(updatedTasks); // Llamar a la función para actualizar el estado en App
    }
    setDraggedIndex(null); // Reiniciar el índice arrastrado
  };

  return (
    <div className="task-list-container">
      <ul className="task-list">
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            index={index}
            toggleTaskCompletion={toggleTaskCompletion}
            removeTask={removeTask}
            editTask={editTask}
            draggable // Habilitar arrastre
            onDragStart={() => handleDragStart(index)} // Manejar inicio de arrastre
            onDrop={() => handleDrop(index)} // Manejar caída
            onDragOver={(e) => e.preventDefault()} // Prevenir el comportamiento por defecto
          />
        ))}
      </ul>
    </div>
  );
}

// Exporta el componente TaskList para que pueda ser importado y utilizado en otros archivos.
export default TaskList;
