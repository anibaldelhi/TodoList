import { TodoList } from './TodoList';
import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoNavbar } from './TodoNavbar';

export const TodoApp = () =>{

    const {todos, handleNewTodo, handleDeleteTodo, handleDoneTodo} = useTodo();

    return(
        <>
            <TodoNavbar/>
            <div className = "row">
                <h2>All: {todos.length}, pendings: {todos.filter(t => !t.done).length} </h2>
                <hr />
                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
                <div className="col-7">
                    <TodoList todos = {todos} onDeleteTodo = {handleDeleteTodo} onDoneTodo = {handleDoneTodo}/>
                </div>
            </div>
        </>
    );
}