const initialState = {
    username:  '',
    password: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_CURRENT_USER':
            return action.formData
        default:
            return state
    }
}