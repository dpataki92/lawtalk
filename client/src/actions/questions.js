// synchronous action creators
export const setCurrentQuestions = questions => {
    return {
        type: "SET_CURRENT_QUESTIONS",
        questions: questions 
    }
}

// asynchronous action creators
export const getCurrentQuestions = (conditions) => {
    console.log(conditions)
    return dispatch => {
        return fetch("/api/questions/list", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
            },
            body: JSON.stringify(conditions)
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.questions) {
                dispatch(setCurrentQuestions(json.questions))
            } else {
                dispatch(setCurrentQuestions([]))
            }
        })
    }
}