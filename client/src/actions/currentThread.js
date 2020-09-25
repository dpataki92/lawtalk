// synchronous action creators
export const setCurrentThread = currentThread => {
    return {
        type: "SET_CURRENT_THREAD",
        currentThread: currentThread 
    }
}

// asynchronous action creators
export const getCurrentThread = (id) => {
    console.log(id)
    return dispatch => {
        return fetch(`/api/questions/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            if (json.questionData) {
                dispatch(setCurrentThread(json.questionData))
            } else {
                dispatch(setCurrentThread({}))
            }           
        })
    }
}