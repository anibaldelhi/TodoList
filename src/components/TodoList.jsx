export const TodoList = ({todos = []}) => {

    return(
        <>
        <ul className = "list-group">
            {
                todos.map(
                    todo => (
                        <li key = {todo.id}>.
                            <span>Item 1</span>
                            <button>Borrar</button>
                        </li>
                    )
                )
            }
        </ul>
        </>
    )
}