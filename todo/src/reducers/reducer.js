
export const initialState = [{
    item: 'Learn about Reducers',
    completed: false,
    id: 0
}]

export const reducer = (state, action) => {
    console.log(action, ' is action')
    switch (action.type) {
        case "NEW_TODO":
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: (Date.now())
                }
            ]
        case "TOGGLE_COMPLETE":
            // copy of state so we can change newState without affecting state
            const newState = [...state];
            const toggleItem = newState[action.index];
            newState[action.index] = {
                ...toggleItem,
                completed: !toggleItem.completed 
            }
            return newState
        case "CLEAR_COMPLETED":
            console.log(state, ' state in CLEAR_COMPLETED')
            state.filter(todo => !todo.completed)
        default:
            return state;
    }
}