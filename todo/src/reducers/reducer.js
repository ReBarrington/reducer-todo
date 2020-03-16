

export const innitialState = {
    item: 'Learn about Reducers',
    completed: false,
    id: 0
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "NEW_TODO":
            return {
                ...state
            }
        default:
            return state;
    }
}