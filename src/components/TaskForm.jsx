/**
 * @file TaskForm.jsx
 * @description Este componente es un formulario que permite al usuario añadir nuevas tareas.
 * Incluye campos para el nombre de la tarea, la categoría y la fecha de vencimiento.
 *
 * Utiliza `useState` para manejar el estado interno del formulario.
 *
 * Importa `FiPlus` de `react-icons/fi` para agregar un icono en el botón de envío.
 */

/* eslint-disable react/prop-types */
// La línea anterior desactiva temporalmente las advertencias de ESLint relacionadas con las prop-types.
// Esto es útil si las prop-types no se están utilizando pero se planea hacerlo más adelante.

import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./TaskForm.css";

/**
 * TaskForm es un componente funcional que renderiza un formulario para añadir nuevas tareas.
 *
 * @function TaskForm
 * @param {Object} props - Las propiedades recibidas por el componente.
 * @param {Function} props.addTask - Función para añadir una nueva tarea a la lista.
 * @returns {JSX.Element} JSX que representa el formulario de creación de tareas.
 */
function TaskForm({ addTask }) {
  // useState hooks para manejar los valores de los inputs del formulario.
  const [newTask, setNewTask] = useState(""); // Estado para el nombre de la nueva tarea.
  const [category, setCategory] = useState(""); // Estado para la categoría de la tarea.
  const [dueDate, setDueDate] = useState(""); // Estado para la fecha de vencimiento de la tarea.
  const [description, setDescription] = useState(""); // Estado para la descripcion de la nueva tarea.

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
      addTask(newTask, description, category, dueDate);
      setNewTask("");
      setCategory("");
      setDescription("");
      setDueDate("");
    }
  };

  return (
    // Formulario para añadir una nueva tarea
    <form className="task-form" onSubmit={handleSubmit}>
      {/* Campo de entrada de texto para el nombre de la nueva tarea */}
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descripcion..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      {/* Selector para elegir la categoría de la tarea */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Categoría</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Personal">Personal</option>
        <option value="Hogar">Hogar</option>
      </select>

      {/* Campo de entrada para seleccionar la fecha de vencimiento de la tarea */}
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      {/* Botón para enviar el formulario y añadir la tarea */}
      <button type="submit" aria-label="Agregar tarea">
        <FiPlus size={20} /> {/* Icono "+" para el botón */}
      </button>
    </form>
  );
}

// Exporta el componente TaskForm para que pueda ser importado y utilizado en otros archivos.
export default TaskForm;
