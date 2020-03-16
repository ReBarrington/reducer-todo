export const completedReducer = (state, action) => {
    console.log(action, ' is action')
    switch (action.type) {
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                completed: true,
            }
        default:
            return state;
    }
}