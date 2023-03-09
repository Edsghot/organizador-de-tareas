import React from "react";
import { TodoCounter } from '../components/TodoCounter/TodoCounter.js'
import { TodoSearch } from '../components/TodoSearch/TodoSearch.js';
import { TodoList } from '../components/TodoList/TodoList.js';
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton.js';
import { TodoContext } from "../components/todoContext/index.js";
import { Modal } from '../components/Modal/modal.js'
import { TodoForm } from "../components/TodoForm/index.js";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    deleteTodo,
    completeTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);


  return (<React.Fragment>
    <TodoCounter />
    <TodoSearch />

    <TodoList>
      {loading && <p>Estamos cargando</p>}
      {error && <p>desesperate</p>}
      {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}

      {searchedTodos.map((todo) => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>

    {!!openModal &&(
      <Modal>
        <TodoForm></TodoForm>
      </Modal>
    )}

    <CreateTodoButton
      setOpenModal = {setOpenModal}
    />
  </React.Fragment>);
}


export { AppUI }