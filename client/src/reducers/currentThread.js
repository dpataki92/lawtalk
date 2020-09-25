export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_THREAD':
            return action.currentThread
        default:
            return state
    }
}