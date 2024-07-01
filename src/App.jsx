import './App.css';
import React, {useState} from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };
  
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  const markCompletedTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task));
  };
  
  return (
    <div className='divTasks'>
      <h1>Lista de tareas</h1>
      <AddTaskForm addTask={addTask}/>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} deleteTask={deleteTask} markCompletedTask={markCompletedTask} />
        ))}
      </ul>
    </div>
  );
};

export default App;
