import React, {useState} from 'react';

function AddTaskForm({addTask}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(text);
        setText('');
    };

    return(
        <>
            <form onSubmit={handleSubmit} className='formTask'>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Añade una tarea nueva"/>
                <button type="submit">Agregar</button>
            </form>
        </>
    );
};

export default AddTaskForm;
