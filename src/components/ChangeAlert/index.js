import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

function ChangeAlert({sincronize}) {
    const {show,toggleShow} = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que cambiaste tus Tareas en otra pestaña</p>
                    <p>¿Quieres sincronizar tus tareas</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={toggleShow}
                    >
                        volver a cargar la informacion
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert }