/**
 * @file TaskItem.jsx
 * @description Componente para representar una tarea individual en la lista.
 * Permite marcar como completada, editar, eliminar y cancelar la edición de las tareas.
 * Utiliza íconos de `react-icons` para las acciones.
 */

/* eslint-disable react/prop-types */
// Desactiva temporalmente las advertencias de ESLint relacionadas con las prop-types. 
// Esto es útil si las prop-types no se están utilizando pero se planea hacerlo más adelante.

import React from 'react';
import { useState } from 'react';
import { FiCheck, FiTrash2, FiEdit, FiX } from 'react-icons/fi'; // Importamos el icono para cancelar
import './TaskItem.css';

/**
 * TaskItem es un componente funcional que muestra una tarea individual y proporciona
 * opciones para marcarla como completada, editarla, eliminarla o cancelar la edición.
 * 
 * @function TaskItem
 * @param {Object} props - Las propiedades recibidas por el componente.
 * @param {Object} props.task - La tarea que se va a mostrar.
 * @param {number} props.index - El índice de la tarea en la lista.
 * @param {Function} props.toggleTaskCompletion - Función para alternar el estado de completado de la tarea.
 * @param {Function} props.removeTask - Función para eliminar la tarea.
 * @param {Function} props.editTask - Función para editar la tarea.
 * @returns {JSX.Element} JSX que representa una tarea individual en la lista.
 */
function TaskItem({ task, index, toggleTaskCompletion, removeTask, editTask }) {
  // Estados locales para manejar la edición de la tarea.
  const [isEditing, setIsEditing] = useState(false); // Estado para determinar si se está editando la tarea.
  const [newText, setNewText] = useState(task.text); // Estado para el nuevo texto de la tarea.
  const [newDescription, setNewDescription] = useState(task.description); // Esttado para la nueva descripción de la tarea.
  const [newCategory, setNewCategory] = useState(task.category); // Estado para la nueva categoría de la tarea.
  const [newDueDate, setNewDueDate] = useState(task.dueDate); // Estado para la nueva fecha de vencimiento de la tarea.
  

  /**
   * Maneja la activación y desactivación del modo de edición.
   * 
   * @function handleEdit
   * @description Si el componente está en modo edición, actualiza la tarea con los nuevos valores.
   * Alterna el estado `isEditing` para entrar y salir del modo de edición.
   */
  const handleEdit = () => {
    if (isEditing) {
      editTask(index, newText, newDescription, newCategory, newDueDate);
    }
    setIsEditing(!isEditing);
  };

  /**
   * Cancela la edición de la tarea y restablece los valores originales.
   * 
   * @function handleCancelEdit
   * @description Restablece los valores de la tarea a su estado original y desactiva el modo de edición.
   */
  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewText(task.text);
    setNewDescription(task.description);
    setNewCategory(task.category);
    setNewDueDate(task.dueDate);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        // Modo edición: permite modificar el texto, la categoría y la fecha de vencimiento de la tarea.
        <div className="edit-form">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Editar tarea..."
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Editar descripción..."
          />
          <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
            <option value="Trabajo">Trabajo</option>
            <option value="Personal">Personal</option>
            <option value="Hogar">Hogar</option>
          </select>
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <div className="edit-buttons">
            {/* Botón para guardar los cambios en la tarea */}
            <button className="edit-save-btn" onClick={handleEdit} aria-label="Guardar cambios" title="Guardar cambios">
              <FiCheck size={18} />
            </button>
            {/* Botón para cancelar la edición de la tarea */}
            <button className="edit-cancel-btn" onClick={handleCancelEdit} aria-label="Cancelar edición" title="Cancelar edición">
              <FiX size={18} />
            </button>
          </div>
        </div>
      ) : (
        // Vista normal de la tarea: muestra el texto y la información adicional de la tarea.
        <>
          <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
          <div className="task-info">
            <small>Creado: {task.createdAt.toLocaleDateString()} {task.createdAt.toLocaleTimeString()}</small>
            {task.completedAt && <small>Completado: {task.completedAt.toLocaleDateString()}</small>}
            <small>Descripción: {task.description}</small>
            <small>Fecha límite: {task.dueDate}</small>
            <small>Categoría: {task.category}</small>
          </div>
        </>
      )}
      <div className="icons">
        {/* Botón para marcar la tarea como completada */}
        <button className="check-btn" onClick={() => toggleTaskCompletion(index)} aria-label="Marcar como completada" title="Marcar como completada">
          <FiCheck size={18} />
        </button>
        {/* Botón para editar la tarea */}
        <button className="edit-btn" onClick={handleEdit} aria-label="Editar tarea" title="Editar tarea">
          <FiEdit size={18} />
        </button>
        {/* Botón para eliminar la tarea */}
        <button className="delete-btn" onClick={() => removeTask(index)} aria-label="Eliminar tarea" title="Eliminar tarea">
          <FiTrash2 size={18} />
        </button>
      </div>
    </li>
  );
}

// Exporta el componente TaskItem para que pueda ser importado y utilizado en otros archivos.
export default TaskItem;
