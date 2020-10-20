// synchronous action creators
export const setCurrentProfile = currentProfile => {
    return {
        type: "SET_CURRENT_PROFILE",
        currentProfile: currentProfile 
    }
}

// asynchronous action creators
export const getCurrentProfile = (id) => {
    return dispatch => {
        return fetch(`/api/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.currentProfile) {
                dispatch(setCurrentProfile(json.currentProfile))
            } else {
                dispatch(setCurrentProfile({}))
            }           
        })
    }
}