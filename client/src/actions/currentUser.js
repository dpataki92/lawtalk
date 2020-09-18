// synchronous action creators
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user: user 
    }
}

export const logout = () => {
    return dispatch => {
      localStorage.clear();
      return dispatch({
        type: "LOGOUT"
      });
    }
  }

// asynchronous action creators
export const login = credentials => {
    console.log("credentials are:", credentials)
    return dispatch => {
        return fetch("/api/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credentials)
          })
          .then(resp => resp.json())
          .then(function(json) {
            console.log(json);
            if (json.message) {
                alert(json.message)
            } else {
                localStorage.setItem('jwt_token', json.jwt);
                dispatch((setCurrentUser(json.user)));
            }
          })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("/api/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            if (json.user) {
                dispatch(setCurrentUser(json.user))
            } else {
                dispatch(setCurrentUser(null))
            }
            
        })
    }
}