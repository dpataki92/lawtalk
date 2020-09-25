// synchronous action creators
export const setCurrentAnswers = currentAnswers => {
    return {
        type: "SET_CURRENT_ANSWERS",
        currentAnswers: currentAnswers 
    }
}

// asynchronous action creators
export const getCurrentAnswers = (id) => {
    return dispatch => {
        return fetch(`/api/questions/${id}/replies`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.answerData) {
                dispatch(setCurrentAnswers(json.answerData))
            } else {
                dispatch(setCurrentAnswers([]))
            }
            
        })
    }
}