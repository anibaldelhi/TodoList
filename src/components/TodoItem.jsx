export const TodoItem = ({todo}) =>{
    return(
        <li>
            <span>{todo.description}</span>
            <button
                type='submit'
                className="btn btn-danger mt-1">
                    Delete
            </button>
        </li>
    )
}