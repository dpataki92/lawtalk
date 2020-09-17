// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user: user 
    }
}

// asynchronous action creators
export const login = credentials => {
    return dispatch => {
        return fetch("/api/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credentials)
          })
          .then(resp => resp.json())
          .then(function(json) {
            console.log(json);
            localStorage.setItem('jwt_token', json.jwt);
          })
    }
}