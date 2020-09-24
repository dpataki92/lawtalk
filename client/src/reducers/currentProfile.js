export default (state = null, action) => {
    switch(action.type) {
        case 'SET_CURRENT_PROFILE':
            return action.currentProfile
        default:
            return state
    }
}