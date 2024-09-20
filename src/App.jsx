/**
 * @file App.jsx
 * @description Componente principal de la aplicación de lista de tareas.
 * Gestiona el estado global, incluyendo las tareas, las búsquedas y los filtros.
 * Renderiza los componentes Header, TaskForm, TaskList, TaskSearch, y TaskFilters.
 * Incluye almacenamiento en localStorage para persistir las tareas.
 */

import React, { useState, useEffect } from 'react'; // Importamos useEffect para manejar efectos secundarios
import Header from './components/Header/Header';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskSearch from './components/TaskSearch/TaskSearch';
import TaskFilters from './components/TaskFilters/TaskFilters';
import Modal from './components/Modal/Modal'; // Nuevo componente Modal
import './App.css';

/**
 * App es el componente principal de la aplicación que maneja el estado global y 
 * la lógica para añadir, editar, completar, eliminar y filtrar tareas.
 * 
 * @function App
 * @returns {JSX.Element} JSX que representa la estructura principal de la aplicación.
 */
function App() {
  // Definición de estados utilizando useState
  const [tasks, setTasks] = useState(() => {
    // Intenta cargar las tareas desde localStorage al iniciar la aplicación
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks).map(task => ({
        ...task,
        createdAt: new Date(task.createdAt),
        completedAt: task.completedAt ? new Date(task.completedAt) : null,
      }));
    }
    return [];
  });
  const [searchQuery, setSearchQuery] = useState(''); // Estado para la búsqueda de tareas.
  const [filterCategory, setFilterCategory] = useState(''); // Estado para el filtro de categoría.
  const [filterStatus, setFilterStatus] = useState(''); // Estado para el filtro de estado (completadas o pendientes).
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Guarda las tareas en localStorage cada vez que el estado de tasks cambia.
   */
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  /**
   * Añade una nueva tarea al listado de tareas.
   * 
   * @function addTask
   * @param {string} taskText - El texto de la tarea.
   * @param {string} category - La categoría de la tarea.
   * @param {string} dueDate - La fecha de vencimiento de la tarea.
   */
  const addTask = (taskText, description, category, dueDate) => {
    const newTask = {
      text: taskText,
      description,
      category,
      dueDate,
      createdAt: new Date(),
      completedAt: null,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  /**
   * Edita una tarea existente.
   * 
   * @function editTask
   * @param {number} index - El índice de la tarea que se va a editar.
   * @param {string} newText - El nuevo texto de la tarea.
   * @param {string} newDescription - La nueva descripción de la tarea.
   * @param {string} newCategory - La nueva categoría de la tarea.
   * @param {string} newDueDate - La nueva fecha de vencimiento de la tarea.
   */
  const editTask = (index, newText, newDescription, newCategory, newDueDate) => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { 
          ...task, 
          text: newText, 
          description: newDescription, 
          category: newCategory, 
          dueDate: newDueDate 
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  /**
   * Alterna el estado de completado de una tarea.
   * 
   * @function toggleTaskCompletion
   * @param {number} index - El índice de la tarea que se va a alternar.
   */
  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed, completedAt: task.completed ? null : new Date() };
      }
      return task;
    });
    setTasks(newTasks);
  };

  /**
   * Elimina una tarea del listado.
   * 
   * @function removeTask
   * @param {number} index - El índice de la tarea que se va a eliminar.
   */
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(newTasks);
  };

  /**
   * Filtra las tareas según los criterios de búsqueda, categoría y estado.
   * 
   * @constant filteredTasks
   * @type {Array}
   */
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === '' || task.category === filterCategory;
    const matchesStatus =
      filterStatus === '' ||
      (filterStatus === 'completed' && task.completed) ||
      (filterStatus === 'pending' && !task.completed);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app-container">
      <Header />
      <div className="task-controls">
        <TaskSearch setSearchQuery={setSearchQuery} />
        <TaskFilters setFilterCategory={setFilterCategory} setFilterStatus={setFilterStatus} />
        <button className="add-task-btn" onClick={openModal}>Añadir Tarea</button>
      </div>
      <TaskList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        removeTask={removeTask}
        editTask={editTask}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TaskForm addTask={addTask} onClose={closeModal} />
      </Modal>
    </div>
  );
}

// Exporta el componente App para que pueda ser utilizado en otros archivos.
export default App;
