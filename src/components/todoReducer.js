export const todoReducer = (initialState = [], action ) => {
    switch( action.type ){
        case 'Add':
            return [...initialState, action.payload];
        default:
            return initialState;
    }
}