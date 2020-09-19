export default (state = [], action) => {
    switch(action.type) {
        case 'SET_CURRENT_QUESTIONS':
            return action.questions
        default:
            return state
    }
}