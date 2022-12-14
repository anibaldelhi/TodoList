import { TodoItem } from "./TodoItem";
import { ListGroup } from "react-bootstrap";

export const TodoList = ({todos = [], onDeleteTodo, onDoneTodo }) => {

    return(
        <>
            <h3>Todo List</h3>
            <ListGroup as="ul">
                {
                    todos.map(
                        todo => (
                            <TodoItem key={todo.id} todo = {todo} onDeleteTodo = {onDeleteTodo} onDoneTodo = {onDoneTodo}/>
                        )
                    )
                }
            </ListGroup>
            <p className={todos.length === 0 ? "visible" :"invisible"}>You don't have any tasks to do. Try adding a new one.</p>
        </>
    )
}