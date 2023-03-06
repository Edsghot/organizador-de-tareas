import React  from 'react';
import {TodoCounter}from './TodoCounter.js'
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from './CreateTodoButton.js';

const defaultTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "Tomar el curso", completed: false },
  { text: "Llorar con la llorona", completed: true },
];
function App() {
  const [todos,setTodos] = React.useState(defaultTodos);
  const [searchValue,setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed = {completedTodos}
      />
      <TodoSearch
        setSearchValue = {setSearchValue}
        searchValue = {searchValue}
      />
      <TodoList>
        {todos.map((todo) => (
            <TodoItem 
            key={todo.text} 
            text = {todo.text}
            completed = {todo.completed}
            />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
/*
<TodoCounter />
      <h2>Has completado 2 de 3 TODOs</h2>
      <TodoSearch />
      <input placeholder="Cebolla" />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem />
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
*/