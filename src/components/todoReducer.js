export const todoReducer = (initialState = [], action ) => {
    switch( action.type ){
        case 'Add':
            return [...initialState, action.payload];
        case 'Delete':
            return initialState.filter(todo=> todo.id !== action.payload);
        default:
            return initialState;
    }
}