import React from 'react';
import './TodoCounter.css';

function TodoCounter(total,completed){
    return(
        <h2 className="TodoCounter">Has completado 2 de 3 TODOs</h2>
    )
}

export {TodoCounter}