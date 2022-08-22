import { TodoList } from './TodoList';
import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () =>{

    const {todos, handleNewTodo, handleDeleteTodo, handleDoneTodo} = useTodo();

    return(
        <div className = "row">
            <h2>All: {todos.length}, pendings: {todos.filter(t => !t.done).length} </h2>
            <hr />
            <div className="col-5">
                <h3>Todo Add</h3>
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
            <div className="col-7">
                <h3>Todo List</h3>
                <TodoList todos = {todos} onDeleteTodo = {handleDeleteTodo} onDoneTodo = {handleDoneTodo}/>
            </div>
        </div>
    )
}