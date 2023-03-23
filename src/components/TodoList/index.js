import './TodoList.css'

function TodoList(props){
    const renderFuc = props.children || props.render    
    return (
        <section className = "TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}            
            {(!props.loading && !props.error) && props.searchedTodos.map(renderFuc)}
        </section>
    )
}

export {TodoList}