export const TodoItem = ({todo, onDeleteTodo}) =>{
    return(
        <li>
            <span>{todo.description}</span>
            <button
                type='submit'
                onClick={() => onDeleteTodo(todo.id)}
                className='btn btn-danger mt-1'>
                    Delete
            </button>
        </li>
    )
}