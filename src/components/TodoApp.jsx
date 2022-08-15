import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';

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

    const handleNewTodo = (todo) =>{
        console.log({todo});
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