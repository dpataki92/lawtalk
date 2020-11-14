// synchronous action creators
export const setCurrentConversations = conversations => {
    return {
        type: "SET_CURRENT_CONVERSATIONS",
        conversations: conversations 
    }
}

// asynchronous action creators
export const getCurrentConversations = (id) => {
    return dispatch => {
        return fetch(`/api/users/${id}/conversations`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.conversations) {
                dispatch(setCurrentConversations(json.conversations))
            } else {
                dispatch(setCurrentConversations([]))
            }
            
        })
    }
}