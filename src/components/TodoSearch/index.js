import React from 'react'
import './TodoSearch.css'
import { TodoContext } from "../todoContext";


function TodoSearch(){
    const {searchValue,setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event)=>{
        console.log(searchValue)
        setSearchValue(event.target.value)
    }

    return (
        <input 
            className = "TodoSearch" 
            placeholder="Ingrese su tarea"
            values={searchValue}
            onChange={onSearchValueChange}
        />
        
    );
}

export {TodoSearch}