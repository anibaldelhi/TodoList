import { FaCheck, FaClock } from 'react-icons/fa';
export const TodoItem = ({todo, onDeleteTodo, onDoneTodo}) =>{
    return(
        <li>
            <span onClick={() =>onDoneTodo(todo.id) }>{todo.description}</span>
            {todo.done ? <FaCheck/> : <FaClock/>}
            <button
                type='submit'
                onClick={() => onDeleteTodo(todo.id)}
                className='btn btn-danger mt-1'>
                    Delete
            </button>
        </li>
    )
}