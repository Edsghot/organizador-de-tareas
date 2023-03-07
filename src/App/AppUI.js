import React from "react";
import {TodoCounter}from '../components/TodoCounter/TodoCounter.js'
import { TodoSearch } from '../components/TodoSearch/TodoSearch.js';
import { TodoList } from '../components/TodoList/TodoList.js';
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton.js';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    setSearchValue,
    searchValue,
    completeTodo,
    deleteTodo,
    searchedTodos,
    setTodos  
}){
    return( <React.Fragment>
        <TodoCounter 
          total={totalTodos}
          completed = {completedTodos}
        />
        <TodoSearch
          setSearchValue = {setSearchValue}
          searchValue = {searchValue}
  
        />
        <TodoList>
          {loading && <p>Estamos cargando</p>}
          {error  && <p>desesperate</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}

          {searchedTodos.map((todo) => (
              <TodoItem 
              key={todo.text} 
              text = {todo.text}
              completed = {todo.completed}
              onComplete ={()=> completeTodo(todo.text)}
              onDelete = {()=>deleteTodo(todo.text)}
              />
          ))}
        </TodoList>
        <CreateTodoButton
          setTodos = {setTodos}
        />
      </React.Fragment>);
}


export {AppUI}