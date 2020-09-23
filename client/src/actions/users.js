// synchronous action creators
export const setTopUsers = topUsers => {
    return {
        type: "SET_TOP_USERS",
        topUsers: topUsers 
    }
}

// asynchronous action creators
export const getTopUsers = () => {
    return dispatch => {
        return fetch("/api/top_users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.topUsers) {
                dispatch(setTopUsers(json.topUsers))
            } else {
                dispatch(setTopUsers([]))
            }           
        })
    }
}