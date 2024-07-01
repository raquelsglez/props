import React from 'react';

function Task({task, markCompletedTask, deleteTask}) {
    return (
        <div className='taskItem'>
            <li onClick={() => markCompletedTask(task.id)} style={{ textDecoration: task.completed === true ? 'line-through' : 'none'}}>
                {task.text}
            </li>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
    );
};

export default Task;
