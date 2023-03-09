import React from 'react';
import { TodoContext } from '../todoContext';
import './TodoForm.css'
function TodoForm() {
    const [newTodoValue,setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)


    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    }
    const OnCancel = ()=>{
        setOpenModal(false)
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false); 
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Escribe tu nueva tarea'

            />
            <div className='TodoForm-buttonContainer'>
                <button
                type='button' 
                className='TodoForm-button TodoForm-button--cancel'
                onClick={OnCancel}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >
                    Añadir
                </button>

            </div>

        </form>
    )
}

export { TodoForm }