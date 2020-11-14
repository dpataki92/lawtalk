export default (state = [], action) => {
    switch(action.type) {
        case 'SET_CURRENT_CONVERSATIONS':
            return action.conversations
        default:
            return state
    }
}