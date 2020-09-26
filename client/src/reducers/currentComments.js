export default (state = [], action) => {
    switch(action.type) {
        case 'SET_CURRENT_COMMENTS':
            return action.currentComments
        default:
            return state
    }
}