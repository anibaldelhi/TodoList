import { GrCheckmark, GrAlarm } from 'react-icons/gr';
import ListGroup from 'react-bootstrap/ListGroup';

export const TodoItem = ({todo, onDeleteTodo, onDoneTodo}) =>{
    return(
        <ListGroup.Item 
            as="li" 
            className="d-flex justify-content-between align-items-start"
            action
            variant = {todo.done ? "dark" : "light"}
            onClick={() =>onDoneTodo(todo.id)}
        >
            <span>{todo.description} {todo.done ? <GrCheckmark/> : <GrAlarm/>}</span>
            
            <button
                type='submit'
                onClick={() => onDeleteTodo(todo.id)}
                className='btn btn-danger mt-1'>
                   Delete
            </button>
        </ListGroup.Item>
    )
}