// synchronous action creators
export const setCurrentComments = currentComments => {
    return {
        type: "SET_CURRENT_COMMENTS",
        currentComments: currentComments 
    }
}

// asynchronous action creators
export const getCurrentComments = (id) => {
    return dispatch => {
        return fetch(`/api/answers/${id}/comments`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.comments) {
                dispatch(setCurrentComments(json.comments))
            } else {
                dispatch(setCurrentComments([]))
                alert("No comments have been provided")
            }           
        })
    }
}