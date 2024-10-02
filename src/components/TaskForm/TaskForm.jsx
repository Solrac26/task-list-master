/**
 * @file TaskForm.jsx
 * @description Este componente es un formulario que permite al usuario añadir nuevas tareas.
 * Incluye campos para el nombre de la tarea, la categoría, la fecha de vencimiento y la prioridad.
 *
 * Utiliza `useState` para manejar el estado interno del formulario.
 *
 * Importa `FiPlus` de `react-icons/fi` para agregar un icono en el botón de envío.
 */

/* eslint-disable react/prop-types */
// La línea anterior desactiva temporalmente las advertencias de ESLint relacionadas con las prop-types.
// Esto es útil si las prop-types no se están utilizando pero se planea hacerlo más adelante.

import React from 'react';
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./TaskForm.css";

/**
 * TaskForm es un componente funcional que renderiza un formulario para añadir nuevas tareas.
 *
 * @function TaskForm
 * @param {Object} props - Las propiedades recibidas por el componente.
 * @param {Function} props.addTask - Función para añadir una nueva tarea a la lista.
 * @param {Function} props.onClose - Función para cerrar el modal después de añadir la tarea.
 * @returns {JSX.Element} JSX que representa el formulario de creación de tareas.
 */
function TaskForm({ addTask, onClose }) {
  // useState hooks para manejar los valores de los inputs del formulario.
  const [newTask, setNewTask] = useState(""); // Estado para el nombre de la nueva tarea.
  const [description, setDescription] = useState(""); // Estado para la descripcion de la nueva tarea.
  const [category, setCategory] = useState(""); // Estado para la categoría de la tarea.
  const [dueDate, setDueDate] = useState(""); // Estado para la fecha de vencimiento de la tarea.
  const [priority, setPriority] = useState(""); // Estado para la prioridad de la tarea.

  /**
   * Maneja el evento de envío del formulario.
   *
   * @function handleSubmit
   * @param {Object} e - El evento de envío del formulario.
   * @description Evita el comportamiento por defecto del formulario, verifica que el campo de la tarea no esté vacío,
   * y luego llama a la función `addTask` para añadir la nueva tarea.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask, description, category, dueDate, priority);
      setNewTask("");
      setCategory("");
      setDescription("");
      setDueDate("");
      setPriority("");
      onClose(); // Cierra el modal después de añadir la tarea
    }
  };

  return (
    // Formulario para añadir una nueva tarea
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="newTask">Nueva tarea</label>
        <input
          id="newTask"
          type="text"
          placeholder="Agrega una nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <input
          id="description"
          type="text"
          placeholder="Descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoría</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecciona una categoría</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Personal">Personal</option>
          <option value="Hogar">Hogar</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="dueDate">Fecha de vencimiento</label>
        <input
          id="dueDate"
          placeholder="Selecciona una fecha"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Prioridad</label>
        <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Selecciona una prioridad</option>
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </div>

      <button type="submit" aria-label="Agregar tarea" className="btn-primary">
        <FiPlus /> Agregar tarea
      </button>
    </form>
  );
}

// Exporta el componente TaskForm para que pueda ser importado y utilizado en otros archivos.
export default TaskForm;
