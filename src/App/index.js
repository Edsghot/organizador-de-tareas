import React from "react";
import { TodoList } from '../components/TodoList/index.js';
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from '../components/CreateTodoButton/index.js';
import { Modal } from '../components/Modal/index.js'
import { TodoForm } from "../components/TodoForm/index.js";
import { TodoHeader } from "../components/TodoHeader/index.js";
import { useTodos } from "./useTodos.js";
import { TodosError } from "../components/TodosError"
import { TodosLoading } from "../components/TodosLoading/index.js"
import { EmptyTodos } from "../components/EmptyTodos/index.js";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { ChangeAlert } from "../components/ChangeAlert/index.js";

function App() {
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    setSearchValue,
    searchValue,
    completeTodo,
    addTodo,
    deleteTodo,
    searchedTodos,
    openModal,
    setOpenModal,
    sincronize,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para "{searchText}"</p>
        }
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      >
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronize}
      />
    </React.Fragment>);
}

export default App;
