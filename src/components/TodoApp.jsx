import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import { useReducer } from 'react';

const initialState = [
    {
        id : 1,
        description: "Primer tarea"
    },
    {
        id: 2,
        description: "Segunda tarea"
    }
]

export const TodoApp = () =>{

const [todos, dispatch] = useReducer( todoReducer , initialState );

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
            </div>
        </div>
    )
}