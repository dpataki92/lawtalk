export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_CONVERSATION':
            return action.currentconversation
        default:
            return state
    }
}