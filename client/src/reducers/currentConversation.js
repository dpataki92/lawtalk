export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_CONVERSATION':
            return action.currentConversation
        default:
            return state
    }
}