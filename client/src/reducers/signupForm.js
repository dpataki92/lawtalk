const initialState = {
    username:  '',
    password: '',
    email: '',
    location: '',
    fields: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_SIGNUP_FORM':
            return action.formData
        default:
            return state
    }
}