export default (state = [], action) => {
    switch (action.type) {
        case 'SET_TOP_USERS':
            return action.topUsers
        default:
            return state
    }
}