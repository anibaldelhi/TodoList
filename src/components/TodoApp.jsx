import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import { useReducer, useEffect } from 'react';
import { TodoAdd } from './TodoAdd';

const initialState = [
    ...JSON.parse(localStorage.getItem('todos') || '""' )
]

export const TodoApp = () =>{

    const [todos, dispatch] = useReducer( todoReducer , initialState );

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (todo) =>{
        const action = {
            type: 'Add',
            payload: todo
        };
        dispatch(action);
    }

    return(
        <div className = "row">
            <h1>TODO App</h1>
            <hr />
            <div className="col-8">
                <h2>Todo List</h2>
                <TodoList todos = {todos} />
            </div>
            <div className="col-4">
                <h2>Todo Add</h2>
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>
    )
}