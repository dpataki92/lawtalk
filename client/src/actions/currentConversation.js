// synchronous action creators
export const setCurrentConversation = currentConversation => {
    return {
        type: "SET_CURRENT_CONVERSATION",
        currentConversation: currentConversation 
    }
}

// asynchronous action creators
export const getCurrentConversation = (id, convId) => {
    return dispatch => {
        return fetch(`/api/users/${id}/conversations/${convId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.currentConversation) {
                dispatch(setCurrentConversation(json.currentConversation))
            } else {
                dispatch(setCurrentConversation({}))
            }           
        })
    }
}