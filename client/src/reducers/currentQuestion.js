export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_QUESTION':
            return action.currentQuestion
        default:
            return state
    }
}