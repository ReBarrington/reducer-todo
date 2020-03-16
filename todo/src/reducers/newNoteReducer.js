
export const initialState = [{
    item: 'Learn about Reducers',
    completed: false,
    id: 0
}]

export const newNoteReducer = (state, action) => {
    console.log(action, ' is action')
    switch (action.type) {
        case "NEW_TODO":
            return [
                ...state,
                {
                item: action.payload,
                completed: false,
                id: (new Date())
            }]
        default:
            return state;
    }
}