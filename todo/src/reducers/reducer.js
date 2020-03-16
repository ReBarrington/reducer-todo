

export const innitialState = {
    item: 'Learn about Reducers',
    completed: false,
    id: 0
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "CASE1":
            return {
                ...state
            }
        case "CASE2":
                return {
                    ...state
                }
        default:
            return state;
    }
}