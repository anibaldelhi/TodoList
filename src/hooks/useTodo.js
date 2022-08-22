import { useReducer, useEffect } from "react";
import { todoReducer } from "../components/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || '""' );
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer( todoReducer , [] , init );

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (todo) =>{
        dispatch({
            type: 'Add',
            payload: todo
        });
    }

    const handleDeleteTodo = (id) =>{
        dispatch({
            type: 'Delete',
            payload: id
        });
    }

    const handleDoneTodo = (id) => {
        dispatch({
            type: 'Done',
            payload: id
        });
    }

    return{
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleDoneTodo
    };
}
