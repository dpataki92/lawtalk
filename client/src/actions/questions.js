// synchronous action creators
export const setCurrentQuestions = questions => {
    return {
        type: "SET_CURRENT_QUESTIONS",
        questions: questions 
    }
}

// asynchronous action creators
export const getCurrentQuestions = (conditions) => {
    return dispatch => {
        return fetch("/api/questions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
            },
            body: JSON.stringify(conditions)
        })
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            if (json.questions) {
                dispatch(setCurrentQuestions(json.questions))
            } else {
                dispatch(setCurrentQuestions([]))
            }
            
        })
    }
}