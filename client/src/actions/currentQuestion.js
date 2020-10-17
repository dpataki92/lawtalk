// synchronous action creators
export const setCurrentQuestion = currentQuestion => {
    return {
        type: "SET_CURRENT_QUESTION",
        currentQuestion: currentQuestion 
    }
}

// asynchronous action creators
export const getCurrentQuestion = (id) => {
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
            if (json.questionData) {
                dispatch(setCurrentQuestion(json.questionData))
            } else {
                dispatch(setCurrentQuestion({}))
            }           
        })
    }
}