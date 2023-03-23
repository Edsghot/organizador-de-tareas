import React from 'react'
import './TodoSearch.css'


function TodoSearch({searchValue,setSearchValue,loading}){

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
            disabled={loading}
        />
        
    );
}

export {TodoSearch}