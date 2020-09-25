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
            if (json.questionData && json.answerData) {
                console.log(json.questionData, json.answerData)
                dispatch(setCurrentThread(json))
            } else {
                dispatch(setCurrentThread({}))
            }           
        })
    }
}