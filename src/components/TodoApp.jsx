import { TodoList } from './TodoList';
import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () =>{

    const {todos, handleNewTodo, handleDeleteTodo, handleDoneTodo} = useTodo();

    return(
        <div className = "row">
            <h1>Todos App</h1>
            <h2>Total: {todos.length}, pendings: {todos.filter(t => !t.done).length} </h2>
            <hr />
            <div className="col-8">
                <h2>Todo List</h2>
                <TodoList todos = {todos} onDeleteTodo = {handleDeleteTodo} onDoneTodo = {handleDoneTodo}/>
            </div>
            <div className="col-4">
                <h2>Todo Add</h2>
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
    )
}