import "./CreateTodoButton.css"
function CreateTodoButton(setTodos){

    const onClickButton = ()=>{
        alert('nuevo')
        setTodos()
    }


    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >+</button>
    )
}

export {CreateTodoButton}