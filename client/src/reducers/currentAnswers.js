export default (state = [], action) => {
    switch(action.type) {
        case 'SET_CURRENT_ANSWERS':
            return action.currentAnswers
        default:
            return state
    }
}